"use client";

import RegisterScreen from "@/screens/register.screen";

const Register = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
                <RegisterScreen />
            </div>
        </main>
    );
}

export default Register;