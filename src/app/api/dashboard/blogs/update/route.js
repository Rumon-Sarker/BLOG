import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        let { searchParams } = new URL(req.url);
        let servicesId = searchParams.get('id')

        let prisma = new PrismaClient();
        let reqBody = await req.json();

        let result = await prisma.blogs.update({
            where: { id: parseInt(servicesId) },
            data: reqBody,

        })
        return NextResponse.json({ status: 'Success', data: result })
    }
    catch (e) {
        return NextResponse.json({ status: 'Fail', data: e.toString() })

    }
}