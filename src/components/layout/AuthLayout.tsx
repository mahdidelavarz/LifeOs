import { Icon } from "@iconify/react";

type authLayout = {
  children: React.ReactNode;
  isBack: boolean;
};

function AuthLayout({ children, isBack }: authLayout) {
  return (
    <div className="w-full h-[100vh] px-8 py-10 bg-background flex flex-col justify-start items-center ">
      <header className="w-full flex justify-center relative">
        <h1 className="text-2xl font-extrabold text-rose-800">Life Os</h1>
        <button
          className={`w-8 h-8 bg-white rounded-lg flex justify-center items-center shadow-sm absolute left-0 ${
            !isBack && "hidden"
          }`}
        >
          <Icon
            icon="solar:alt-arrow-left-broken"
            width="24"
            height="24"
            className="text-text-gray"
          />
        </button>
      </header>
      {children}
    </div>
  );
}

export default AuthLayout;
