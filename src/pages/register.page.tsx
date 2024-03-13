
import { useEffect, useState } from "react";
import RegisterForm from "@/components/register/register.form";
import { TitleView } from "@/components/register/titleview";
import { registerWithEmail } from "@/api";
import { useRegisterStore } from "@/store/register.store";

const RegisterPage = () => {

    const registerRequest = useRegisterStore(state => state.request);
    const [error, setError] = useState("");

    useEffect(() => {
        const email = registerRequest.email;
        const password = registerRequest.password;
        if (email && password) {
            registerWithEmail({ username: '', email: email, password: password })
                .then((response) => {
                    if (response == undefined) {
                        console.log("RegisterHandlerError");
                        setError("Register Error");
                    } else {
                        console.log("Register Handler JWT", response.jwt);
                    }
                })
                .catch((error) => {
                    setError(error);
                });
        }
    });

    return (
        <div className="flex flex-col items-center justify-center mt-7 border border-gray-200 rounded-xl bg-white">
            <TitleView />
            <RegisterForm />
            <div className="flex items-center justify-center mb-5">
                {
                    error.length > 0 ? <label data-testid="error" className="block mb-2 text-sm font-medium text-rouge">{error}</label>
                        : " "
                }
            </div>
        </div>
    )
}

export default RegisterPage;