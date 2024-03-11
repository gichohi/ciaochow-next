import { act, fireEvent, render } from "@testing-library/react";
import { Login } from "..";
import React from "react";


const EMAIL = "demo@plusnarrative.com";
const PASSWORD = "demoPassword1!";

describe('<LoginForm/>', () => {
    it('should load login form', () => {
        const loginForm = render(<Login />);

        const emailInput = loginForm.getByTestId("email") as HTMLInputElement;
        emailInput.focus();
        act(() => {
            fireEvent.change(emailInput, { target: { value: EMAIL } });
        });
    
        const passwordInput = loginForm.getByTestId("password") as HTMLInputElement;
        passwordInput.focus();
        act(() => {
            fireEvent.change(passwordInput, { target: { value: PASSWORD } });
        });
    
        expect(emailInput).toBeInTheDocument();
        expect(emailInput.value).toBe(EMAIL);
    
        expect(passwordInput).toBeInTheDocument();
        expect(passwordInput.value).toBe(PASSWORD);
    });
    
    it('allows user to submit form', async () => {
        const loginForm = render(<Login />);

        const emailInput = loginForm.getByTestId("email") as HTMLInputElement;
        emailInput.focus();
        act(() => {
            fireEvent.change(emailInput, { target: { value: EMAIL } });
        });
    
        const passwordInput = loginForm.getByTestId("password") as HTMLInputElement;
        passwordInput.focus();
        act(() => {
            fireEvent.change(passwordInput, { target: { value: PASSWORD } });
        });
    
        expect(emailInput).toBeInTheDocument();
        expect(emailInput.value).toBe(EMAIL);
    
        expect(passwordInput).toBeInTheDocument();
        expect(passwordInput.value).toBe(PASSWORD);

        const loginButton = loginForm.getByTestId("btnLogin") as HTMLInputElement;

    });

})

