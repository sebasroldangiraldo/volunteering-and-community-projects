import { ILoginRequest } from "../dto/auth/login-request.dto";
import { ILoginResponse } from "../dto/auth/login-response.dto";

export interface PAuth {
    login(request : ILoginRequest) : Promise<ILoginResponse>
};