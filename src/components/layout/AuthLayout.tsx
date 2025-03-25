function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="w-full h-[100vh] px-8 py-10 bg-background-200 flex flex-col justify-between items-center">
        <header className="w-full">
          <h1 className="text-2xl font-extrabold text-rose-800">Life Os</h1>
        </header>
        {children}
      </div>
    );
  }
  
  export default AuthLayout;