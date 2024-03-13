import { act, fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import RegisterForm from "../register.form";

const USERNAME = "demo";
const EMAIL = "demo@plusnarrative.com";
const PASSWORD = "demoPassword1!";

describe('<RegisterForm/>', () => {
    it('should load register form', () => {

        const registerForm = render(<RegisterForm />);

        const usernameInput = registerForm.getByTestId("username") as HTMLInputElement;
        act(() => {
            usernameInput.focus();
            fireEvent.change(usernameInput, { target: { value: USERNAME } });
        });

        const emailInput = registerForm.getByTestId("email") as HTMLInputElement;
        act(() => {
            emailInput.focus();
            fireEvent.change(emailInput, { target: { value: EMAIL } });
        });

        const passwordInput = registerForm.getByTestId("password") as HTMLInputElement;
        act(() => {
            passwordInput.focus();
            fireEvent.change(passwordInput, { target: { value: PASSWORD } });
        });

        expect(usernameInput).toBeInTheDocument();
        expect(usernameInput.value).toBe(USERNAME);

        expect(emailInput).toBeInTheDocument();
        expect(emailInput.value).toBe(EMAIL);

        expect(passwordInput).toBeInTheDocument();
        expect(passwordInput.value).toBe(PASSWORD);
    });

    it('allows user to submit form', async () => {

        const registerForm = render(<RegisterForm />);

        const usernameInput = registerForm.getByTestId("username") as HTMLInputElement;
        act(() => {
            usernameInput.focus();
            fireEvent.change(usernameInput, { target: { value: USERNAME } });
        });

        const emailInput = registerForm.getByTestId("email") as HTMLInputElement;
        act(() => {
            emailInput.focus();
            fireEvent.change(emailInput, { target: { value: EMAIL } });
        });

        const passwordInput = registerForm.getByTestId("password") as HTMLInputElement;
        act(() => {
            passwordInput.focus();
            fireEvent.change(passwordInput, { target: { value: PASSWORD } });
        });

        expect(usernameInput).toBeInTheDocument();
        expect(usernameInput.value).toBe(USERNAME);

        expect(emailInput).toBeInTheDocument();
        expect(emailInput.value).toBe(EMAIL);

        expect(passwordInput).toBeInTheDocument();
        expect(passwordInput.value).toBe(PASSWORD);

        const registerButton = registerForm.getByTestId("register") as HTMLInputElement;
        act(() => {
            fireEvent.submit(registerButton);
        });

        await waitFor(() => {
            expect(registerButton.disabled).toEqual(false);
        });

    });

    it('disables submit button if inputs are invalid', async () => {

        const registerForm = render(<RegisterForm />);

        const usernameInput = registerForm.getByTestId("username") as HTMLInputElement;
        act(() => {
            usernameInput.focus();
            fireEvent.change(usernameInput, { target: { value: USERNAME } });
        });

        const emailInput = registerForm.getByTestId("email") as HTMLInputElement;
        act(() => {
            emailInput.focus();
            fireEvent.change(emailInput, { target: { value: EMAIL } });
        });

        const passwordInput = registerForm.getByTestId("password") as HTMLInputElement;
        act(() => {
            passwordInput.focus();
            fireEvent.change(passwordInput, { target: { value: "demo" } });
        });

        expect(usernameInput).toBeInTheDocument();
        expect(usernameInput.value).toBe(USERNAME);

        expect(emailInput).toBeInTheDocument();
        expect(emailInput.value).toBe(EMAIL);

        expect(passwordInput).toBeInTheDocument();
        expect(passwordInput.value).toBe("demo");

        const registerButton = registerForm.getByTestId("register") as HTMLInputElement;

        await waitFor(() => {
            expect(registerButton.disabled).toEqual(true);
        });

    });

});