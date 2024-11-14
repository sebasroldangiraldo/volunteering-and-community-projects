import { ClientHttp } from "../utils/client-http";
import { ICreateProjectResponse } from "@/app/core/application/dto/projects/post/projects-response.dto";
import { ICreateProjectRequest } from "@/app/core/application/dto/projects/post/projects-request.dto";
import { IGetProjectResponse } from "@/app/core/application/dto/projects/get-id/projects-response.dto";
import { IGetProjectsResponse } from "@/app/core/application/dto/projects/get/projects-response.dto";


export class ProjectsService {

    private clientHttp : ClientHttp;

    constructor() {
        this.clientHttp = new ClientHttp(); // inyección de dependencias -> el constructor le da valor al atributo que contiene la clase. 
    };

    async find(page : number, size : number) {

        try {
            const data = this.clientHttp.get<IGetProjectsResponse>(`projects?page=${page}&size=${size}`);
            return data;

        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    async findOne(id : number) {

        try {
            const data = this.clientHttp.get<IGetProjectResponse>(`projects/${id}`);
            return data;

        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    async create( body : ICreateProjectRequest ) {

        try {
            const data = this.clientHttp.post<ICreateProjectResponse, ICreateProjectRequest>("projects", body);
            return data;

        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    async update( id : number, body : ICreateProjectRequest) {

        try {
            const data = this.clientHttp.update<ICreateProjectResponse, ICreateProjectRequest>(`projects/${id}`, body);
            return data;

        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    async destroy( id : number ) {

        try {
            const data = this.clientHttp.delete(`projects/${id}`);
            return data;

        } catch (error) {
            console.log(error);
            throw error;
        }
    };
}