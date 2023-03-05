import nodemailer from "nodemailer";

export default async function sendEmail(req, res) {
  const { userName, subject, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.APP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    await transporter.sendMail({
      from: userName,
      to: process.env.EMAIL_ADDRESS,
      subject: subject,
      text: `Email from ${email} \n ${message}`,
    });

    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Error sending email." });
  }
}
