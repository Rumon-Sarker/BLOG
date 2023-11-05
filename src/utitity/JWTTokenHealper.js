import { SignJWT, jwtVerify } from "jose";

export async function CreateToken(email, id) {
    const secret = new TextEncoder().encode(process.env.JWT_SECRITE);
    let token = await new SignJWT({ email: email, id: id })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setIssuer(process.env.JWT_ISSUER)
        .setExpirationTime(process.env.JWT_EXPIRATION_TIME)
        .sign(secret)
    return token;
}

export async function TokenVerify(token) {

    const secret = new TextEncoder().encode(process.env.JWT_SECRITE)
    let decoded = await jwtVerify(token, secret);
    return decoded['payload']

}