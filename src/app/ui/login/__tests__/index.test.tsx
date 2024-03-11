import jest from "next/jest";
import { act, fireEvent, render } from "@testing-library/react";
import { Login } from "..";


const EMAIL = "demo@plusnarrative.com";
const PASSWORD = "demoPassword1!";

describe('<LoginForm/>', () => {
    const login = render(<Login />);

    const emailTestID = "email";
    const emailInput = login.getByPlaceholderText("your email");
    emailInput.focus();
    act(() => {
        fireEvent.change(emailInput, EMAIL);
    });

    const passwordTestID = "password";
    const passwordInput = login.getByPlaceholderText("your password");
    passwordInput.focus();
    act(() => {
        fireEvent.change(passwordInput, PASSWORD);
    });

    expect(emailInput.children).toBe(EMAIL);
    expect(passwordInput).toBe(PASSWORD)

})