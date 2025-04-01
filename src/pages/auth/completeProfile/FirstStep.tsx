import { Icon } from "@iconify/react/dist/iconify.js";
import AuthLayout from "../../../components/layout/AuthLayout";
import CircleProgress from "../../../components/ui/CircleProgress";
import { useNavigate } from "react-router-dom";
import useProgressStore from "../../../store/ProfileProgressStore";
import { useEffect } from "react";

function FirstStep() {
  const navigate = useNavigate();
  const { step, setStep } = useProgressStore();

  useEffect(() => {
    setStep(1);
  }, []);

  return (
    <AuthLayout isBack={false}>
      <div className="w-full flex flex-col justify-center items-center mt-14">
        <h1 className="text-sm">تکمیل پروفایل شما!</h1>
        <div className="w-24 h-24 rounded-full bg-primary-900 mt-8"></div>
        <button className="w-36 h-12 flex justify-center items-center gap-1 text-xs bg-white rounded-lg mt-4 shadow-sm">
          <Icon icon="solar:camera-broken" width="15" height="15" />
          <span>بارگذاری تصویر</span>
        </button>
        <input
          type="text"
          className="input mt-8 w-full text-sm py-2.5"
          placeholder="نام و نام خانوادگی"
        />
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

export default FirstStep;
