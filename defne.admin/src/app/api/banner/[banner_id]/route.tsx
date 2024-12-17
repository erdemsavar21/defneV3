import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export async function PUT(request: NextRequest, { params }: { params: { banner_id: string } }) {

    try {
        const { banner_id } = await params;
        const { image, description, capture } = await request.json();
        const newBanner = await prisma.banner.update({
            where: {
                id: parseInt(banner_id, 10),
            },
            data: {
                image: image,
                description: description,
                capture: capture
            },
        });

        return NextResponse.json({ success: 1, banner: newBanner });

    } catch (error: any) {
        console.log("Error update banner:", error.message);
        return NextResponse.json(
            { success: 0, error: error.message },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}

export async function GET(request: NextRequest, { params }: { params: { banner_id: string } }) {
    try {
        const { banner_id } = await params;
        const banner = await prisma.banner.findFirst({
            where: {
                id: parseInt(banner_id, 10),
            },
        });

        return new Response(JSON.stringify({ success: 1, banner }), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        });
    } catch (error: any) {
        console.log("Error fetching banner:", error.message);

        return new Response(
            JSON.stringify({ success: 0, error: error.message }),
            { headers: { 'Content-Type': 'application/json' }, status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}
