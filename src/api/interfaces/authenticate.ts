import { AxiosRequestConfig } from 'axios';

export interface TypeLoginRequest extends AxiosRequestConfig {
    email: string;
    password: string;
}

export interface TypeSignUp {
    email: string;
    password: string;
}
