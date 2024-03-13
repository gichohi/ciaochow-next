import { Formik } from "formik";
import { TitleView } from "./titleview";
import * as Yup from 'yup';
import { loginWithEmail } from "@/app/api";
import { useUserStore } from "@/app/store/User.Store";
import { useState } from "react";

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Please enter valid email')
        .required('Email is required')
        .label('Email'),
    password: Yup.string()
        .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
        .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
        .matches(/\d/, 'Password must have a number')
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required')
        .label('Password')
});

export const Login = () => {

    const userStore = useUserStore();

    const [error, setError] = useState("");

    const handleSubmit = async (values: any) => {
        const email = values.email;
        const password = values.password;
        const response = await loginWithEmail({ email: email, password: password });
        console.log("LoginHandlerResponse", response);
        
        if (response == undefined) {
            setError("Login Error");
        } else {
            console.log("Login Handler JWT", response.jwt);
            userStore.addUser({email: response.user.email, token: response.jwt});
        }
    }

    return (
        <div className="flex flex-col items-center justify-center mt-7 border border-gray-200 rounded-xl bg-white">
            <TitleView />
            <div className="flex items-center justify-center mt-20">
                <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                >
                {({ handleChange, handleSubmit, isValid, values, errors }) => (
                <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">email</label>
                        <input 
                        type="email" 
                        name="email" 
                        value={values.email}
                        data-testid="email" 
                        id="email" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2" 
                        placeholder="your email" 
                        onChange={handleChange("email")}
                        required />
                    </div>
                    {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">password</label>
                        <input 
                        type="password" 
                        name="password" 
                        value={values.password}
                        data-testid="password" 
                        id="password" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" 
                        placeholder="your password" 
                        onChange={handleChange("password")}
                        required />
                    </div>
                    {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}

                    <button data-testid="login" type="submit" disabled={!isValid} className="flex justify-center w-full my-5 py-2 items-center bg-primary rounded-lg h-1/6"/>
                    <div className="flex items-center justify-center mb-5">
                        <label className="block mb-2 text-sm font-medium text-primary">Dont Have an account? <b>Register</b></label>
                    </div>
                </form>
                )}
                </Formik>
            </div>
        </div>
    )
}