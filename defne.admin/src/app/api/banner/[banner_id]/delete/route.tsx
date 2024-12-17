import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export async function POST(request: NextRequest, { params }: { params: { banner_id: string } }) {
    
    try {

        const { banner_id } = await params;
        const result = await prisma.banner.delete({
            where: {
                id: parseInt(banner_id, 10), 
              }
        });

        return NextResponse.json({ success: 1 });

    } catch (error: any) {
        console.log("Error delete banner:", error.message);
        return NextResponse.json(
            { success: 0, error: error.message },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}