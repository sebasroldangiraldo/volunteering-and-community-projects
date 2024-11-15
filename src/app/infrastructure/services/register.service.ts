import { ClientHttp } from "../utils/client-http";
import { IRegisterResponse } from "@/app/core/application/dto/auth/register-response.dto";

export class RegisterService {

    private clientHttp : ClientHttp;

    constructor() {
        this.clientHttp = new ClientHttp();
    };

    async create( body : FormData) {

        try {
            const data = this.clientHttp.register<IRegisterResponse, FormData>("users", body);
            return data;

        } catch (error) {
            console.log(error);
            throw error;
        }
    };    
};
