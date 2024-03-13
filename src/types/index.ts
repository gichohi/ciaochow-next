export interface User{
    email: string;
    token: string;
};

export interface UserResponse {
    username: string;
    email: string;
}

export interface ApiResponse {
    jwt: string;
    user: UserResponse;
}

export interface LoginRequest {
    email: string;
    password: string;
};

export interface LoginProps {
    email: string;
    password: string;
    handleFormSubmit: any;
};

export interface RegisterRequest {
    username: string;
    email: string;
    password: string;
};

export interface Chow {
    title: string;
    description: string;
    image: string;
}

export type RootStackNavigatorParams = {
    Login: undefined;
    Register: undefined;
    Home: undefined;
  }

export interface TabProps {
    title: string;
    description: string;
    image: string;
}