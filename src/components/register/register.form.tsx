import { useRegisterStore } from "@/store/register.store";
import { RegisterRequest } from "@/types";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, ({ min }) => `Username must be at least ${min} characters`)
        .required('Username is required')
        .label('Username'),
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


const RegisterForm = () => {
    const registerStore = useRegisterStore();

    const router = useRouter();

    const handleSubmit = (values: RegisterRequest, helpers: FormikHelpers<RegisterRequest>) => {
        registerStore.addRequest({username: values.username, email: values.email, password: values.password});
    }

    return (
        <div className="flex items-center justify-center mt-20">
            <Formik
                initialValues={{username: '', email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isValid, errors }) => (
                    <Form className="max-w-sm mx-auto">
                        <div className="mb-5">
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-black">username</label>
                            <Field
                                type="text"
                                name="username"
                                data-testid="username"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2"
                                placeholder="username"
                                required />
                        </div>
                        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
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
                            isValid ? <button data-testid="register" type="submit" disabled={!isValid} className="flex justify-center w-full h-12 my-5 py-2 items-center bg-primary rounded-lg">Submit</button> 
                                    : <button data-testid="register" type="submit" disabled={!isValid} className="flex justify-center w-full h-12 my-5 py-2 items-center bg-gray-700 rounded-lg">Submit</button>
                        }
                        <div className="flex items-center justify-center mb-5">
                            <label className="block mb-2 text-sm font-medium text-primary">Already have an account? <b onClick={() => router.push('/login')}>Login</b></label>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegisterForm;