import { act, fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import LoginForm from "../login.form";


const EMAIL = "demo@plusnarrative.com";
const PASSWORD = "demoPassword1!";

describe('<LoginForm/>', () => {
    it('should load login form', () => {

        const loginForm = render(<LoginForm />);

        const emailInput = loginForm.getByTestId("email") as HTMLInputElement;
        act(() => {
            emailInput.focus();
            fireEvent.change(emailInput, { target: { value: EMAIL } });
        });

        const passwordInput = loginForm.getByTestId("password") as HTMLInputElement;
        act(() => {
            passwordInput.focus();
            fireEvent.change(passwordInput, { target: { value: PASSWORD } });
        });

        expect(emailInput).toBeInTheDocument();
        expect(emailInput.value).toBe(EMAIL);

        expect(passwordInput).toBeInTheDocument();
        expect(passwordInput.value).toBe(PASSWORD);
    });

    it('allows user to submit form', async () => {

        const loginForm = render(<LoginForm />);

        const emailInput = loginForm.getByTestId("email") as HTMLInputElement;
        act(() => {
            emailInput.focus();
            fireEvent.change(emailInput, { target: { value: EMAIL } });
        });

        const passwordInput = loginForm.getByTestId("password") as HTMLInputElement;
        act(() => {
            passwordInput.focus();
            fireEvent.change(passwordInput, { target: { value: PASSWORD } });
        });

        expect(emailInput).toBeInTheDocument();
        expect(emailInput.value).toBe(EMAIL);

        expect(passwordInput).toBeInTheDocument();
        expect(passwordInput.value).toBe(PASSWORD);

        const loginButton = loginForm.getByTestId("login") as HTMLInputElement;
        act(() => {
            fireEvent.submit(loginButton);
        });

        await waitFor(() => {
            expect(loginButton.disabled).toEqual(false);
        });
    });

    it('disables submit button if inputs are invalid', async () => {

        const loginForm = render(<LoginForm />);

        const emailInput = loginForm.getByTestId("email") as HTMLInputElement;
        act(() => {
            emailInput.focus();
            fireEvent.change(emailInput, { target: { value: EMAIL } });
        });

        const passwordInput = loginForm.getByTestId("password") as HTMLInputElement;
        act(() => {
            passwordInput.focus();
            fireEvent.change(passwordInput, { target: { value: "demo" } });
        });

        expect(emailInput).toBeInTheDocument();
        expect(emailInput.value).toBe(EMAIL);

        expect(passwordInput).toBeInTheDocument();
        expect(passwordInput.value).toBe("demo");

        const loginButton = loginForm.getByTestId("login") as HTMLInputElement;

        await waitFor(() => {
            expect(loginButton.disabled).toEqual(true);
        });

    });

});

