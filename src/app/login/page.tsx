"use client";

import LoginScreen from "@/screens/login.screen";

const Login = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <LoginScreen />
      </div>
    </main>
  );
}

export default Login;