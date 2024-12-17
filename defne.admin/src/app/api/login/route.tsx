import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
    try {

        const body = await request.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json({ success: 0, error: 'Email or Password is required' }, { status: 400 });
        }
        const adminUser = process.env.ADMIN_USER;
        const adminPassword = process.env.ADMIN_PASSWORD;
        if (adminUser !== email || adminPassword !== password) {
            return NextResponse.json({ success: 0, error: 'Email or Password is not valid' }, { status: 401 });
        }
        const token = jwt.sign(
            { email },
            process.env.JWT_SECRET || 'default-secret',
            { expiresIn: '1h' }
        );

        const response = NextResponse.json({ success: 1 });
        response.cookies.set('token', token, {
            httpOnly: true,
            path: '/',
            maxAge: 3600,
        });

        return response;
    } catch (error: any) {

        return NextResponse.json({ success: 0, error: error.message }, { status: 500 });
    }
}
