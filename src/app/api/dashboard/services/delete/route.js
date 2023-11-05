import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function DELETE(req, res) {
    try {
        let { searchParams } = new URL(req.url)
        let paramsId = searchParams.get('id')

        let prisma = new PrismaClient()
        let result = await prisma.services.delete({
            where: { id: parseInt(paramsId) }
        })

        return NextResponse.json({ status: 'Success', data: result })

    }
    catch (e) {
        return NextResponse.json({ status: 'Delete fail', data: e.toString() })
    }
}

