
import { ICreateProjectRequest } from "@/app/core/application/dto/projects/post/projects-request.dto";
import { ProjectsService } from "@/app/infrastructure/services/projects.service";
import { NextResponse } from "next/server";

export async function PATCH( request : Request, { params }: { params: Promise<{ id: number }> }) {

    const service = new ProjectsService();

    try {

        const body :  ICreateProjectRequest = await request.json();
        const id = (await params).id;

        const response = await service.update(id, body);

        return NextResponse.json(response, { status: 200 });

    } catch (error: unknown) {

        return NextResponse.json({ message: 'error' }, { status: 500 });
    };
};