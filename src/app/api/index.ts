import { ApiResponse, LoginRequest, RegisterRequest } from "../types";
import axios from 'axios';
import { BASE_URL } from "../constants";

export const loginWithEmail = async (request: LoginRequest): Promise<ApiResponse | undefined> => {

    console.log("LoginWithEmail", request);

    const postData = {
        identifier: request.email,
        password: request.password
    }

    console.log("PostData", postData);

    const headers = {
        'content-type': 'application/json',
        'accept': '*/*'
    }
    let response: any;

    try {
        response = await axios.post(`${BASE_URL}/api/auth/local`, postData, {
            headers: headers
        });
    } catch (error) {
        console.log("LoginWithEmailError", error);
    }

    console.log("LoginWithEmail", response);

    if (response == undefined) {
        return undefined;
    } else {
        return response.data;
    }
};

export const registerWithEmail = async (request: RegisterRequest): Promise<ApiResponse | undefined> => {

    console.log("RegisterWithEmail", request);

    const postData = {
        username: request.username,
        identifier: request.email,
        password: request.password
    }

    console.log("PostData", postData);

    const headers = {
        'content-type': 'application/json',
        'accept': '*/*'
    }

    let response: any;

    try {
        response = await axios.post(`${BASE_URL}/api/auth/local/register`, postData, {
            headers: headers
        });
    } catch (error) {
        console.log("RegisterWithEmailError", error);
    }


    if (response == undefined) {
        return undefined;
    } else {
        return response.data;
    }
};

export const getChows = async (jwt: string): Promise<any | undefined> => {

    console.log("Chows JWT", jwt);

    const headers = {
        'authorization': `Bearer ${jwt}`
    }

    let response: any;

    try {
        response  =  await axios.get(`${BASE_URL}/api/chows?populate=*`, {
            headers: headers
        });
    } catch(error){
        console.log("GetChowsError", error);
    }
    

    if (response == undefined) {
        return undefined;
    } else {
        return response.data;
    }
}