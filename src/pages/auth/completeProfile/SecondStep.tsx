import { useNavigate } from "react-router-dom";
import AuthLayout from "../../../components/layout/AuthLayout";
import CircleProgress from "../../../components/ui/CircleProgress";
import useProgressStore from "../../../store/ProfileProgressStore";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Picker from "react-mobile-picker";

// Persian numerals conversion
const toPersianNumeral = (num: number | string): string => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  // Ensure num is a string before using replace
  return String(num).replace(/\d/g, (d) => persianDigits[parseInt(d)]);
};

// Generate arrays for year, month, day
const currentYear = new Date().getFullYear();
const years = Array.from(
  { length: currentYear - 1900 + 1 },
  (_, i) => currentYear - i
).map((year) => toPersianNumeral(year));
const PersianMonths = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

const days = Array.from({ length: 31 }, (_, i) => i + 1).map((day) =>
  toPersianNumeral(day)
);

interface AgeForm {
  year: string;
  month: string;
  day: string;
}

function SecondStep() {
  const Navigate = useNavigate();
  const { step, setStep } = useProgressStore();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<AgeForm>({
    defaultValues: {
      year: toPersianNumeral(currentYear - 30), // Default: 30 years ago
      month: toPersianNumeral(1), // January
      day: toPersianNumeral(1),
    },
  });
  // Sync form values
  const year = watch("year");
  const month = watch("month");
  const day = watch("day");
  const pickerValue = { year, month, day };

  useEffect(() => {
    if (step !== 2) setStep(2);
  }, []);

  const handlePickerChange = (newValue: { [key: string]: string }) => {
    setValue("year", newValue.year);
    setValue("month", newValue.month);
    setValue("day", newValue.day);
    // Trigger vibration (10ms pulse) if supported
    if ("vibrate" in navigator) {
      navigator.vibrate(10);
    }
  };

  const onSubmit: SubmitHandler<AgeForm> = (data) => {
    console.log("Age:", data);
    setStep(3);
    Navigate("/completeProfile/thirdStep");
  };
  return (
    <AuthLayout isBack={true}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-10 ">
        <div className="relative">
          {/* Picker */}
          <div className="relative w-full">
            {/* Gradient overlays for fade effect */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-background to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent z-10" />
            {/* Selection highlight */}
            <div className="absolute top-1/2 left-0 right-0 h-8 -mt-4 z-10" />
            <Picker
              value={pickerValue}
              onChange={handlePickerChange}
              wheelMode="natural"
              height={405}
              itemHeight={50}
            >
              <Picker.Column name="year">
                {years.map((option) => (
                  <Picker.Item key={option} value={option}>
                    {({ selected }) => (
                      <div
                        className={`z-50 ${
                          selected
                            ? "font-bold text-text-black"
                            : "text-text-lightGray"
                        }`}
                      >
                        {option}
                      </div>
                    )}
                  </Picker.Item>
                ))}
              </Picker.Column>
              <Picker.Column name="month">
                {PersianMonths.map((option) => (
                  <Picker.Item key={option} value={option}>
                    {({ selected }) => (
                      <div
                        className={`sssssssss ${
                          selected
                            ? "font-bold text-text-black"
                            : "text-text-lightGray"
                        }`}
                      >
                        {option}
                      </div>
                    )}
                  </Picker.Item>
                ))}
              </Picker.Column>
              <Picker.Column name="day">
                {days.map((option) => (
                  <Picker.Item key={option} value={option}>
                    {({ selected }) => (
                      <div
                        className={` ${
                          selected
                            ? "font-bold text-text-black"
                            : "text-text-lightGray"
                        }`}
                      >
                        {option}
                      </div>
                    )}
                  </Picker.Item>
                ))}
              </Picker.Column>
            </Picker>
          </div>
        </div>
        {/* Hidden inputs for validation */}
        <input
          type="hidden"
          {...register("year", { required: "Year is required" })}
        />
        <input
          type="hidden"
          {...register("month", { required: "Month is required" })}
        />
        <input
          type="hidden"
          {...register("day", { required: "Day is required" })}
        />
        {errors.year && (
          <p className="text-red-500 text-sm">{errors.year.message}</p>
        )}
        {errors.month && (
          <p className="text-red-500 text-sm">{errors.month.message}</p>
        )}
        {errors.day && (
          <p className="text-red-500 text-sm">{errors.day.message}</p>
        )}
        <div className="w-full flex items-center gap-2 mt-6">
          <CircleProgress step={step} />
          <button
            className="btn-full"
            onClick={() => Navigate("/completeProfile/secondStep")}
          >
            ثبت و مرحله بعد
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default SecondStep;
