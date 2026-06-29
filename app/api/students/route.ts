import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"

export async function GET() {
    const students = await prisma.student.findMany();
    return NextResponse.json(students);
}

export async function POST(request: Request) {
    const body = await request.json();
    const student = await prisma.student.create({
        data: {
            name: body.name,
            major: body.major
        }
    });
    return NextResponse.json(student);
}

export async function PUT(request: Request) {
    const body = await request.json();
    const update = await prisma.student.update({
        where: { id: body.id },
        data: {
            name: body.name,
            major: body.major
        }
    });
    return NextResponse.json(update);
}

export async function DELETE(request: Request) {
    const body = await request.json();
    await prisma.student.delete({
        where: { id: body.id }
    })
    return NextResponse.json({ message: "Deleted"});
}