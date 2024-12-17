import { promises as fs } from "fs";
import path from "path";

export async function POST(req: Request) {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
        return new Response("File not provided", { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadDir = path.join(process.cwd(), "public/images/slider");
    const filePath = path.join(uploadDir, file.name);

    // Eğer klasör yoksa oluştur
    await fs.mkdir(uploadDir, { recursive: true });

    // Dosyayı yaz
    await fs.writeFile(filePath, buffer);

    return new Response(JSON.stringify({ path: `/images/slider/${file.name}` }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}