
import { ProjectsService } from "@/app/infrastructure/services/projects.service";
import { NextResponse } from "next/server";

export async function DELETE(_: Request, { params }: { params: Promise<{ id: number }> }) {

    const service = new ProjectsService();

    try {
        const id = (await params).id;
        await service.destroy(id);

        return NextResponse.json({ message: 'proyecto eliminado exitosamente' }, { status: 200 });

    } catch (error: unknown) {

        return NextResponse.json({ message: 'error' }, { status: 500 });
    };
};