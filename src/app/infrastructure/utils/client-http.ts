import {  authOptions, CustomSession } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const defaultBaseUrl = "https://communnityvolunteering-production.up.railway.app/api/v1";

export class ClientHttp {

    private baseUrl : string;

    constructor(baseUrl? : string) {
        this.baseUrl = baseUrl || defaultBaseUrl;
    };

    async get<T>(url : string) : Promise<T> {

        const headers = await this.getHeader();
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers : headers,
            method : "GET",
            cache : "no-store"
        });

        return this.handleResponse(response);
    };

    async post<T, B>(url : string, body : B) : Promise<T> {

        const headers = await this.getHeader();
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers : headers,
            method : "POST",
            body : JSON.stringify(body)
        });

        return this.handleResponse(response);
    };

    async update<T, B>(url : string, body : B) : Promise<T> {

        const headers = await this.getHeader();
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers : headers,
            method : "PATCH",
            body : JSON.stringify(body)
        });

        return this.handleResponse(response);
    };

    async delete (url : string) : Promise<void> {
        
        const headers = await this.getHeader();
        await fetch(`${this.baseUrl}/${url}`, {
            headers : headers,
            method : "DELETE"
        });
    };

    async file(url: string): Promise<Blob> {

        const session = await getServerSession(authOptions) as CustomSession;
        const token = session?.user?.token;

        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers: {"Authorization" : `Bearer ${token}`},
            method: "GET",
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw errorData;
        };

        return await response.blob();
    };

    private async getHeader() {

        const session = await getServerSession(authOptions) as CustomSession;
        const token = session?.user?.token;
    
        console.log('este es el token: ', token);
    
        return {
            "Content-Type" : "application/json",
            ...(token && { Authorization: `Bearer ${token}` })
        };
    };

    private async handleResponse(response : Response) {

        if (!response.ok) {
            const errorData = await response.json();
            throw errorData;
        };

        return await response.json();
    };
}