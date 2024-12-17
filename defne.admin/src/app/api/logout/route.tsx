import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
    try {
        const response = NextResponse.json({ success: 1 });
        response.cookies.set('token', '', {
            httpOnly: true,
            path: '/',
            maxAge: 0,
        });

        return response;
    } catch (error: any) {

        return NextResponse.json({ success: 0, error: error.message }, { status: 500 });
    }
}