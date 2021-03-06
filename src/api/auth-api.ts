import { instance, APIResponseType, ResultCodeForCapcthaEnum, ResultCodesEnum } from "./api";

type MeResponseDataType = {
    id: number,
    email: string,
    login: string
} 
type LoginResponseDataType = {
    userId : number
} 

export const authAPI = {
    getMe() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then(response => response.data);
    },
    login(email: string, password: string, rememberMe = false,captcha: null | string = null) {
        return instance.post<APIResponseType<LoginResponseDataType, ResultCodesEnum | ResultCodeForCapcthaEnum>>(`auth/login`, {email, password, rememberMe, captcha})
        .then(response => response.data);
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}