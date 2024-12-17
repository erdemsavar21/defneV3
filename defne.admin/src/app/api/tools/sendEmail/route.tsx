import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from 'next/server';


export async function POST(request: NextRequest) {
    try {

        const body = await request.json();
        const { subject, message, fromEmail, toEmail, attachment } = body;

        if (!message || !subject) {
            return NextResponse.json({ success: 0, error: 'Message or Subject is required' }, { status: 400 });
        }
        const smtpServer = process.env.SMTP_SERVER;
        const smtpPort = process.env.SMTP_PORT;
        const smtpUser = process.env.SMTP_USER;
        const smtpPassword = process.env.SMTP_PASSWORD;

        const transporter = nodemailer.createTransport({
            host: smtpServer,
            port: parseInt(smtpPort || "587"),
            secure: false, // true if using 465, false for other ports
            auth: {
                user: smtpUser,
                pass: smtpPassword,
            },
            tls: {
                rejectUnauthorized: false,
            }
        });

        const info = await transporter.sendMail({
            from: fromEmail,
            to: toEmail,
            subject: subject,
            //text: message,
            html: message,
        });

        return NextResponse.json({ success: 1 });
    } catch (error: any) {

        return NextResponse.json({ success: 0, error: error.message }, { status: 500 });
    }
}