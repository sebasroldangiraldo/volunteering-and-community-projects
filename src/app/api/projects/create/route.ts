import { ICreateProjectRequest } from "@/app/core/application/dto/projects/post/projects-request.dto";
import { ProjectsService } from "@/app/infrastructure/services/projects.service";
import { NextResponse } from "next/server";

export async function POST(request : Request) {

    const service = new ProjectsService();

    try {
        const body :  ICreateProjectRequest = await request.json();
        const response = await service.create(body);

        return NextResponse.json(response, {status : 200});

    } catch (error : unknown) {
        
        return NextResponse.json({message : 'error'}, {status : 500});
    };
};