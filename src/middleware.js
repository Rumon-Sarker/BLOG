import { NextResponse } from "next/server";
import { TokenVerify } from "@/utitity/JWTTokenHealper";

export async function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith('/dashboard')) {
    try {
      let token = req.cookies.get("token");
      let payload = await TokenVerify(token["value"]);
      const requestHeader = new Headers(req.headers);
      requestHeader.set("email", payload["email"]);
      requestHeader.set("id", payload["id"]);

      return NextResponse.next({
        request: { headers: requestHeader },
      });
    } catch (e) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
}
