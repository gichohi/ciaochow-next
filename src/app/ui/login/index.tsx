import { Button } from "./button";
import { TitleView } from "./titleview";

export const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-7 border border-gray-200 rounded-xl bg-white">
            <TitleView />
            <div className="flex items-center justify-center mt-20">
                <form className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2" placeholder="your email" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" placeholder="Your password" required />
                    </div>
                    <Button />
                    <div className="flex items-center justify-center mb-5">
                        <label className="block mb-2 text-sm font-medium text-primary">Dont Have an account? <b>Register</b></label>
                    </div>
                </form>
            </div>
        </div>
    )
}