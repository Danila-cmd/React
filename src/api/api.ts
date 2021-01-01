import { UsersType } from './../types/types';
import axios from "axios";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "471dfe9e-cdfc-4caa-96c9-f2ed995966f8"
    }
})

export enum ResultCodeForCapcthaEnum {
    CaptchaIsRequired = 10
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export type GetItemsType = {
    items: Array<UsersType>
    totalCount: number
    error: string | null
}

export type APIResponseType< D = {}, RC = ResultCodesEnum > = {
    data: D
    messages: Array<string>
    resultCode: RC
}