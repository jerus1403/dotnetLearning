import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

import { IActivity, IUser, IUserFormValues } from '../models';

const sleep = (delayTime: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delayTime);
    });
};

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(async response => {
    await sleep(500);
    return response;
}, (error: AxiosError) => {
    const { data, status, config } = error.response as AxiosResponse;
    switch (status) {
        case 400:
            if (config.method === 'get' && data.errors.hasOwnProperty('id')) {
                window.location.href = `${window.location.origin}/not-found`;
            }
            if (data.errors) {
                let modalStateErrors: string[] = [];
                for (const key in data.errors) {
                    if (data.errors[key]) {
                        modalStateErrors = [...modalStateErrors, ...data.errors[key]];
                    }
                }
                throw modalStateErrors.flat();
            } else {
                toast.error('Bad Request!');
            }
            break;
        case 401:
            toast.error('Unauthorized!');
            break;
        case 403:
            toast.error('Forbidden!');
            break;
        case 404:
            window.location.href = `${window.location.origin}/not-found`;
            break;
        case 500:
            throw data;
    }
    return Promise.reject(error);
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Activities = {
    list: () => request.get<IActivity[]>('/activities'),
    details: (id: string) => request.get<IActivity>(`/activities/${id}`),
    create: (activity: IActivity) => request.post<void>(`/activities`, activity),
    update: (activity: IActivity) => request.put<void>(`/activities/${activity.id}`, activity),
    delete: (id: string) => request.del<void>(`/activities/${id}`),
};

const Account = {
    current: () => request.get<IUser>('/account'),
    login: (user: IUserFormValues) => request.post<IUser>('/account/login', user),
    register: (user: IUserFormValues) => request.post<IUser>('account/register', user),
};

export const agent = {
    Activities,
    Account,
};