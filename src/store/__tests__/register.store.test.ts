import { act, renderHook } from "@testing-library/react-hooks";
import { RegisterRequest } from "@/types";
import { RegisterState, useRegisterStore } from "../register.store";

describe('registerStore', () => {
    let registerStore: ReturnType<typeof renderHook<unknown, RegisterState>>;

    beforeEach(() => {
        registerStore = renderHook(() => useRegisterStore());
    });

    it('add a register request at registration', () => {
        const request: RegisterRequest = {
            username: "user",
            email: "user@ymail.org",
            password: "demoPassword1"
        }

        act(() => {
            registerStore.result.current.addRequest(request);
        });

        expect(registerStore.result.current.request).toEqual(
            {
                username: 'user',
                email: 'user@ymail.org',
                password: 'demoPassword1'
            }
        );
    });

});