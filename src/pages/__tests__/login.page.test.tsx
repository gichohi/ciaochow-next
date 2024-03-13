import { BASE_URL } from "@/constants";
import { ERROR_MOCK_RESPONSE } from "@/msw/mock.data";
import { rest } from "msw";
import { setupServer } from "msw/node";
import LoginPage from "../login.page";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import LoginForm from "@/components/login/login.form";

describe('', () => {
    const server = setupServer(
        rest.post(
            `${BASE_URL}/api/auth/local`,
            (_req, res, ctx) => {
                return res(ctx.status(400), ctx.json(ERROR_MOCK_RESPONSE));
            },
        )
    );
    
    beforeAll(() => {
        server.listen();
    });

    afterEach(() => {
        server.resetHandlers();
    });

    afterAll(() => {
        server.close();
    });


    it('should display error message on API error', async () => {

        const page = render(
                <LoginPage/>
        );


        const emailInput = page.getByTestId("email") as HTMLInputElement;
        act(() => {
            emailInput.focus();
            fireEvent.change(emailInput, { target: { value: "test@example.com" } });
        });
    
        const passwordInput = page.getByTestId("password") as HTMLInputElement;
        act(() => {
            passwordInput.focus();
            fireEvent.change(passwordInput, { target: { value: "demoPassword1" } });
        });

        const loginButton = page.getByTestId("login");
        act(() => {
            fireEvent.submit(loginButton);
        });

        await waitFor(() => {
            const errorLabel = page.getByTestId("error");
            expect(errorLabel.textContent).toBe("Login Error");
        });
    })
})