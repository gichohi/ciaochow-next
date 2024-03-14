import { act, renderHook } from "@testing-library/react-hooks";
import { LoginState, useLoginStore } from "../login.store";
import { LoginRequest } from "@/types";

describe('loginStore', () => {
    let loginStore: ReturnType<typeof renderHook<unknown, LoginState>>;

    beforeEach(() => {
        loginStore = renderHook(() => useLoginStore());
    });

    it('add a login request at login', () => {
        const request: LoginRequest = {
            email: "user@ymail.org",
            password: "demoPassword1"
        }

        act(() => {
            loginStore.result.current.addRequest(request);
        });

        expect(loginStore.result.current.request).toEqual(
            {
                email: 'user@ymail.org',
                password: 'demoPassword1'
            }
        );
    });

});