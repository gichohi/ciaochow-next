import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { CHOWS_MOCK_RESPONSE, ERROR_MOCK_RESPONSE, LOGIN_MOCK_RESPONSE, REGISTER_MOCK_RESPONSE } from './mock.data';
import { BASE_URL } from '../constants';

const registerUrl = BASE_URL + '/auth-local-register';
const loginUrl = BASE_URL + '/auth-local-register';
const getChowsUrl = BASE_URL + '/chows?populate=1';

const registerHandler = rest.post(registerUrl, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(REGISTER_MOCK_RESPONSE));
});

export const loginHandler = rest.get(loginUrl, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(LOGIN_MOCK_RESPONSE));
});

const getChowsHandler = rest.get(getChowsUrl, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(CHOWS_MOCK_RESPONSE));
});

const handlers = [registerHandler, loginHandler, getChowsHandler];

export const mswServer = setupServer(...handlers);

const registerFailedHandler = rest.post(
    registerUrl,
    (_req, res, ctx) => {
        return res(ctx.status(500));
    },
);

export const loginFailedHandler = rest.post(
    loginUrl,
    (_req, res, ctx) => {
        return res(ctx.status(400), ctx.json(ERROR_MOCK_RESPONSE));
    },
);

const getChowsFailedHandler = rest.post(
    getChowsUrl,
    (_req, res, ctx) => {
        return res(ctx.status(500));
    },
);

export const setupRegisterHandler = () =>
    mswServer.use(registerHandler);

export const setupRegisterFailedHandler = () =>
    mswServer.use(registerFailedHandler);

export const setupLoginHandler = () =>
    mswServer.use(loginFailedHandler);

export const setupLoginFailedHandler = () =>
    mswServer.use(loginFailedHandler);

export const setupGetChowsHandler = () =>
    mswServer.use(getChowsHandler);

export const setupGetChowsFailedHandler = () =>
    mswServer.use(getChowsFailedHandler);