
import { useEffect, useState } from "react";
import LoginForm from "@/components/login/login.form";
import { TitleView } from "@/components/login/titleview";
import { loginWithEmail } from "@/api";
import { loginSelector } from "@/store/login.slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addUser } from "@/store/user.slice";


const LoginPage = () => {
    const dispatch = useAppDispatch();
    const loginRequest = useAppSelector(loginSelector);

    const [error, setError] = useState("");

    useEffect(() => {
        const email = loginRequest.request.email;
        const password = loginRequest.request.password;
        if(email && password){
            loginWithEmail({ email: email, password: password })
            .then((response) => {
                if (response == undefined) {
                    console.log("LoginHandlerError");
                    setError("Login Error");
                } else {
                    console.log("Login Handler JWT", response.jwt);
                    dispatch(addUser({email: response.user.email, token: response.jwt}));
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
            <LoginForm/>
            <div className="flex items-center justify-center mb-5">
                <label data-testid="error" className="block mb-2 text-sm font-medium text-rouge">{error}</label>
            </div>
        </div>
    );
}

export default LoginPage;

