import { useEffect } from "react";
import AuthLayout from "../../../components/layout/AuthLayout";
import CircleProgress from "../../../components/ui/CircleProgress";
import useProgressStore from "../../../store/ProfileProgressStore";
import { useNavigate } from "react-router-dom";

function ThirdStep() {
  const navigate = useNavigate();
  const { step, setStep } = useProgressStore();

  useEffect(() => {
    setStep(3);
  }, []);

  return (
    <AuthLayout isBack={false}>
      <div className="w-full flex flex-col justify-center items-center mt-14">
        <h1 className="text-sm">جنسیت خود را انتخاب کنید.</h1>
        <div className="flex gap-6 mt-32">
          <img src="../../../../public/images/2618750e-d6d0-4922-9fec-aa06dc0d641c.png" alt="" />
          <img src="../../../../public/images/Group 1261153137.png" className="w-28 h-28" alt="" />
        </div>
        <div className="w-full flex items-center gap-2 mt-32">
          <CircleProgress step={step} />
          <button
            className="btn-full"
            onClick={() => navigate("/completeProfile/secondStep")}
          >
            ثبت و مرحله بعد
          </button>
        </div>
      </div>
    </AuthLayout>
  );
}

export default ThirdStep;
