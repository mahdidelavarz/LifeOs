import AuthLayout from "../../components/layout/AuthLayout";

function Login() {
  return (
    <AuthLayout>
      
      <div className="flex flex-col justify-center items-center">
        <img
          src="/images/clipboard_with_pen_and_bell_notification_checklist_form_report_checkbox_business_3d_background_illustration 1.png"
          alt="clipboard"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <h1 className="text-xl font-extrabold text-blue-800">
          به پلانر خوش آمدید
        </h1>
        <p className="text-xs text-gray-500">
          برای ورود و ثبت نام شماره همراه خود را وارد کنید.
        </p>
        <input type="text" className="input mt-2" placeholder="09000000000" />
        <span className="text-[8px] text-slate-700 w-full flex justify-start">
          * شماره موبایل الزامی است.
        </span>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <span className="text-[9px] text-slate-700">
          ورود و یا ثبت نام در لاولکد به منزله{" "}
          <b className="text-blue-600">پذیرش قوانین و مقررات</b> است.
        </span>
        <button className="btn-full">ورود</button>
      </div>
    </AuthLayout>
  );
}

export default Login;