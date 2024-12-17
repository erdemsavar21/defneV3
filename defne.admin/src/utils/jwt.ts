import { jwtVerify } from 'jose';

export async function verifyToken(token: string): Promise<any> {
    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'default-secret');
        const { payload } = await jwtVerify(token, secret); // Token doğrulama
        return payload;
    } catch (error) {
        console.error('Invalid token:', error);
        return null;
    }
}