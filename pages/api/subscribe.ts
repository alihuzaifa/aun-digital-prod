// app/api/sendEmail.ts
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    const { email } = data;
    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ha4587323@gmail.com", // your Gmail address
        pass: "hofi ythl qlfh oaru", // your Gmail password or App Password
      },
    });

    // Setup email data with beautiful HTML template
    const mailOptions = {
      from: `"User" <${email}>`, // sender address
      to: [
        "info@aundigital.ae",
        "kashif@aundigital.ae",
        "ha4587323@gmail.com",
        "aijaz@aundigital.ae",
      ],
      subject: "New Subscribe Form Submission", // Subject line
      html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
            <h2 style="text-align: center; color: #4CAF50;">New Subscribe Form Submission</h2>
            <p style="text-align: center; color: #555;">You have received a new message from your website Subscribe form.</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
              </tr>
            </table>
            <p style="text-align: center; color: #999;">This email was sent from the Subscribe form on your website.</p>
          </div>
        `,
    };

    try {
      // Send mail with defined transport object
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email", error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
