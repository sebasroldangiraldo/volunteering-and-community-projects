
import { ProjectsService } from "@/app/infrastructure/services/projects.service";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: Promise<{ id: number }> }) {

    const service = new ProjectsService();

    try {
        const id = (await params).id;
        const response = await service.findOne(id);

        return NextResponse.json(response, { status: 200 });

    } catch (error: unknown) {

        return NextResponse.json({ message: 'error' }, { status: 500 });
    };
};