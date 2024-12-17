import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {

        const { image, description } = await request.json();
        const newBanner = await prisma.banner.create({
            data: {
                image,
                description
            },
        });

        return NextResponse.json({ success: 1, banner: newBanner });

    } catch (error: any) {
        console.log("Error creating banner:", error.message);
        return NextResponse.json(
            { success: 0, error: error.message },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}

export async function GET(request: NextRequest) {
    try {
        
        const banners = await prisma.banner.findMany({
            orderBy: {
                id: 'asc', 
            },
        });

        return new Response(JSON.stringify({ success: 1, banners }), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        });
    } catch (error: any) {
        console.log("Error fetching banners:", error.message);
        
        return new Response(
            JSON.stringify({ success: 0, error: error.message }),
            { headers: { 'Content-Type': 'application/json' }, status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}