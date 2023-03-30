import NODEMAILER from 'nodemailer';

const CONFIG = require("config");
const MAILTRAP_HOST = CONFIG.get("mailtrap.host");
const MAILTRAP_PORT = CONFIG.get("mailtrap.smtp_port");
const MAILTRAP_USER = CONFIG.get("mailtrap.user");
const MAILTRAP_PASSWORD = CONFIG.get("mailtrap.password");

type EmailPayload = {
    from: string
    to: string
    subject: string
    html: string
}
export default function sendEmail(data: EmailPayload) {
    const TRANSPORTER = NODEMAILER.createTransport(
        {
            host: MAILTRAP_HOST,
            port: parseInt(MAILTRAP_PORT),
            auth: {
                user: MAILTRAP_USER,
                pass: MAILTRAP_PASSWORD,
            },
        }
    )

    return TRANSPORTER.sendMail(data, (error, info) => {
        if (error) {
            return console.log(error);
        }
    });
}