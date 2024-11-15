
import { RegisterService } from "@/app/infrastructure/services/register.service";
import { NextResponse } from "next/server";

export async function POST(request : Request) {

    const service = new RegisterService();

    try {
        const formData = await request.formData();  
        const response = await service.create(formData);

        return NextResponse.json(response, {status : 200});

    } catch (error : unknown) {
        
        return NextResponse.json({message : 'error'}, {status : 500});
    };
};