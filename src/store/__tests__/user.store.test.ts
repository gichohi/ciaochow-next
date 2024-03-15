import { act, renderHook } from "@testing-library/react-hooks";
import { UserState, useUserStore } from "../user.store";
import { User } from "@/types";


describe('useStore', () => {
    let userStore: ReturnType<typeof renderHook<unknown, UserState>>;

    beforeEach(() => {
        userStore = renderHook(() => useUserStore());
    });

    it('add a user at login', () => {
        const user: User = {
            email: "user@ymail.org",
            token:
                `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1a
            WxkZXIiLCJpYXQiOjE3MDkzMjM2MTMsImV4cCI6MTc0MDg1OTYxMywiYXVkIjoid3d3LmV4YW1
            wbGUuY29tIiwic3ViIjoidXNlckB5bWFpbC5vcmciLCJFbWFpbCI6InVzZXJAeW1haWwub3JnI
            iwiUm9sZSI6Ik1hbmFnZXIifQ.xTK-nDygcuvaGBpd_v4XJNZ6PQYOlIbGedl_bAM0R8k`
        }

        act(() => {
            userStore.result.current.addUser(user);
        });

        expect(userStore.result.current.user).toEqual(
            {
                email: 'user@ymail.org',
                token:
                    `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1a
            WxkZXIiLCJpYXQiOjE3MDkzMjM2MTMsImV4cCI6MTc0MDg1OTYxMywiYXVkIjoid3d3LmV4YW1
            wbGUuY29tIiwic3ViIjoidXNlckB5bWFpbC5vcmciLCJFbWFpbCI6InVzZXJAeW1haWwub3JnI
            iwiUm9sZSI6Ik1hbmFnZXIifQ.xTK-nDygcuvaGBpd_v4XJNZ6PQYOlIbGedl_bAM0R8k`
            }
        );
    });

});