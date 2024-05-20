import { TypeLoginRequest, TypeSignUp, TypeResetPassword } from '~/api/interfaces/authenticate';
import request from '~/api/request';

export const getProfile = (token?: string) =>
  request.get(`users/get-profile`, token ? { headers: { Authorization: `Bearer ${token}` } } : {});

export const login = (params: TypeLoginRequest) => request.post(`/auth/login`, params);

export const register = (params: TypeSignUp) => request.post(`auth/register`, params);
// export const forgotPassword = (email: string) => request.post(`auth/get-new-password`, { email });
export const resetPassword = ({ password, token }: TypeResetPassword) => {
  return request.post('auth/validate-reset-token-password', { password, token });
};
export const activeUser = (token: string) => {
  return request.get(`auth/active-user?token=${token}`);
};

export const sendRequestResetPassword = (email: string) => {
  return request.post('auth/forgot-password', { email });
};

