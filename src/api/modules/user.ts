import request from '~/api/request';
import { TypeParamsPaging } from '~/api/interfaces/general';

export const getUsersForAdmin = (params?: TypeParamsPaging) => {
    return request.get(`web/admin/users`, params ? params : {});
};

export const getDetailForAdmin = (uuid: string, params?: any) => {
    return request.get(`web/admin/users/detail/${uuid}`, params ? params : {});
};


export const blockUser = (uuid: string, params?: any) =>
    request.put(`web/admin/users/block/${uuid}`, params ? params : {});

export const adminManualTopUp = (params?: any) => request.post(`web/admin/users/manual-top-up`, params ? params : {});

export const adminManualCashOut = (params?: any) =>
    request.post(`web/admin/users/manual-cash-out`, params ? params : {});
