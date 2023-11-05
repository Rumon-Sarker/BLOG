import { CreateToken } from "@/utitity/JWTTokenHealper";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        let reqBody = await req.json()
        let prisma = new PrismaClient();

        let result = await prisma.user.findMany({
            where: reqBody,

        })
        if (result.length === 0) {
            return NextResponse.json({ status: "Fail", data: result })
        }
        else {
            let token = await CreateToken(result['email'], result['id']);
            let expirationTime = new Date(Date.now() + 24 * 60 * 60 * 1000);
            let cookieString = `token =${token}; expires=${expirationTime.toUTCString()}; path=/`;
            return NextResponse.json({ status: 'Success', data: token }, { status: 200, headers: { "set-cookie": cookieString } })
        }

    } catch (e) {

        return NextResponse.json({ status: "Fail", data: e.toString() })
    }
}