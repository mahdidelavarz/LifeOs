import OTPInput from "react-otp-input";
import AuthLayout from "../../components/layout/AuthLayout";
import { useState } from "react";
function ConfirmOtpForm() {
  const [otp, setOtp] = useState("");
  return (
    <AuthLayout isBack={true}>
      <div className="w-full flex flex-col justify-center items-center mt-14">
        <img src="/images/lock 1.png" alt="lock" />
        <span className="text-text-black font-extrabold">
          ورود با کد تایید.
        </span>
        <span className="text-text-gray text-xs mt-2">
          کد تأیید به شماره 09911476750 ارسال شده است.
        </span>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={5}
          renderSeparator={<span></span>}
          renderInput={(props) => <input {...props} />}
          containerStyle="w-full flex flex-row-reverse gap-1 p-4 justify-center"
          inputStyle={{
            width: "50px",
            height:"50px",
            borderRadius: "12px",
            padding: "5px",
            outline: "none",
            backgroundColor: "white",
            boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.09), 0 4px 6px -4px rgba(0, 0, 0, 0.2)",
          }}
        />
        <button className="btn-full text-sm h-[50px] mt-12">ثبت کد تایید</button>
        <button className="text-text-gray text-xs my-5">ارسال مجدد کد یکبار مصرف</button>
      </div>
    </AuthLayout>
  );
}

export default ConfirmOtpForm;
