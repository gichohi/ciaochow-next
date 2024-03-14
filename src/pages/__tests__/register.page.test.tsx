import { BASE_URL } from "@/constants";
import { ERROR_MOCK_RESPONSE } from "@/msw/mock.data";
import { rest } from "msw";
import { setupServer } from "msw/node";
import RegisterPage from "../register.page";
import { act, fireEvent, render, waitFor } from "@testing-library/react";

describe('', () => {
    const server = setupServer(
        rest.post(
            `${BASE_URL}/api/auth/local/register`,
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
            <RegisterPage />
        );
        const userInput = page.getByTestId("username") as HTMLInputElement;
        await waitFor(() => {
            userInput.focus();
        });

        act(() => {
            fireEvent.change(userInput, { target: { value: "test" } });
        });

        const emailInput = page.getByTestId("email") as HTMLInputElement;
        await waitFor(() => {
            emailInput.focus();
        });
        act(() => {
            fireEvent.change(emailInput, { target: { value: "test@example.com" } });
        });

        const passwordInput = page.getByTestId("password") as HTMLInputElement;
        await waitFor(() => {
            passwordInput.focus();
        });
        
        act(() => {
            fireEvent.change(passwordInput, { target: { value: "demoPassword1" } });
        });

        const registerButton = page.getByTestId("register");
        act(() => {
            fireEvent.submit(registerButton);
        });

        await waitFor(() => {
            const errorLabel = page.getByTestId("error");
            expect(errorLabel.textContent).toBe("Register Error");
        });
    })
})