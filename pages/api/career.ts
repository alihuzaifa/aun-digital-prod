// app/api/sendEmail.ts
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    const {
      fullName,
      email,
      contact,
      address,
      city,
      date,
      pay,
      image,
      applyFor,
    } = data;
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
      from: `"${fullName}" <${email}>`, // sender address
      to: [
        "info@aundigital.ae",
        "kashif@aundigital.ae",
        "ha4587323@gmail.com",
        "aijaz@aundigital.ae",
      ],
      subject: "New Career Form Submission", // Subject line
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
          <h2 style="text-align: center; color: #4CAF50;">New Career Form Submission</h2>
          <p style="text-align: center; color: #555;">You have received a new message from your website career form.</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Contact No.:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${contact}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Address:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${address}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>City:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${city}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Date:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${date}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Desired Pay:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${pay}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Applied For:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${applyFor}</td>
            </tr>
            <tr>
           <tr>
          <td colspan="2" style="padding: 10px; border-bottom: 1px solid #ddd;">
            <img src="${image}" alt="User Image" style="max-width: 100%; height: auto;" />
          </td>
        </tr>
        </tr>
          </table>
          <p style="text-align: center; color: #999;">This email was sent from the career modal form on your website.</p>
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
