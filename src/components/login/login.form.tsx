import { useAppDispatch } from "@/store/hooks";
import { addRequest } from "@/store/login.slice";
import { LoginRequest } from "@/types";
import { Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from 'yup';


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

const LoginForm = () => {
    const dispatch = useAppDispatch();

    const handleSubmit = (values: LoginRequest, helpers: FormikHelpers<LoginRequest>) => {
        dispatch(addRequest(values));
    }

    return (
        <div className="flex items-center justify-center mt-20">
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isValid, errors }) => (
                    <Form className="max-w-sm mx-auto">
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">email</label>
                            <Field
                                type="email"
                                name="email"
                                data-testid="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2"
                                placeholder="your email"
                                required />
                        </div>
                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">password</label>
                            <Field
                                type="password"
                                name="password"
                                data-testid="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
                                placeholder="your password"
                                required />
                        </div>
                        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                        {
                            isValid ? <button data-testid="login" type="submit" disabled={!isValid} className="flex justify-center w-full h-12 my-5 py-2 items-center bg-primary rounded-lg">Submit</button> 
                                    : <button data-testid="login" type="submit" disabled={!isValid} className="flex justify-center w-full h-12 my-5 py-2 items-center bg-gray-700 rounded-lg">Submit</button>
                        }
                        <div className="flex items-center justify-center mb-5">
                            <label className="block mb-2 text-sm font-medium text-primary">Dont Have an account? <b>Register</b></label>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;

