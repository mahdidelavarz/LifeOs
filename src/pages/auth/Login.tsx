import AuthLayout from "../../components/layout/AuthLayout";

function Login() {
  return (
    <AuthLayout isBack={false}>
      <div className="flex flex-col justify-center items-center mt-15">
        <img
          src="/images/clipboard.png"
          alt="clipboard"
        />
      </div>
      <div className="flex flex-col gap-2 w-full items-center mt-9">
        <h1 className="text-xl font-extrabold text-primary-800">
          به LifeOs خوش آمدید
        </h1>
        <p className="text-xs text-text-gray">
          برای ورود و ثبت نام شماره همراه خود را وارد کنید.
        </p>
        <input type="text" className="input w-full mt-2" placeholder="09000000000" dir="ltr" />
        <span className="text-[8px] text-text-gray w-full flex justify-start">
          * شماره موبایل الزامی است.
        </span>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-2 mt-16">
        <span className="text-[9px] text-text-gray">
          ورود و یا ثبت نام در lifeOs به منزله{" "}
          <b className="text-primary-600">پذیرش قوانین و مقررات</b> است.
        </span>
        <button className="btn-full">
          تایید شماره
        </button>
      </div>
    </AuthLayout>
  );
}

export default Login;
