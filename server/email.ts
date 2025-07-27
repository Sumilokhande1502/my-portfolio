import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: EmailData): Promise<boolean> {
  try {
    // Create a test account if no email credentials are provided
    let testAccount = await nodemailer.createTestAccount();
    
    // Use either real Gmail credentials or test credentials
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER || testAccount.user,
        pass: process.env.EMAIL_PASS || testAccount.pass,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || testAccount.user,
      to: process.env.EMAIL_TO || 'sumitlokhande53@gmail.com',
      subject: `Portfolio Contact: ${data.subject}`,
      text: `
New contact form submission:

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

---
This message was sent from your portfolio contact form.
Reply to: ${data.email}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Portfolio Contact</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
          </div>
          <div style="background: #ffffff; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb;">
            <h3>Message:</h3>
            <p style="line-height: 1.6;">${data.message.replace(/\n/g, '<br>')}</p>
          </div>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 14px;">
            This message was sent from your portfolio contact form.<br>
            Reply directly to: <a href="mailto:${data.email}">${data.email}</a>
          </p>
        </div>
      `,
      replyTo: data.email,
    };

    const info = await transporter.sendMail(mailOptions);
    
    // If using test account, log the preview URL
    if (!process.env.EMAIL_USER) {
      console.log('Test email sent! Preview URL:', nodemailer.getTestMessageUrl(info));
      console.log('Note: This is a test email. To send real emails, configure EMAIL_USER and EMAIL_PASS environment variables.');
    }
    
    return true;
  } catch (error) {
    console.error('Email sending error:', error);
    throw new Error('Failed to send email. Please try again later.');
  }
}