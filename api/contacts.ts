import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import { insertContactSchema } from '../shared/schema';

// CORS headers for all responses
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).json({ message: 'OK' });
  }

  // Set CORS headers
  Object.entries(corsHeaders).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validate request body
    const validatedData = insertContactSchema.parse(req.body);

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${validatedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0; text-align: center;">New Portfolio Contact</h2>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e9ecef;">
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h3 style="color: #495057; margin-top: 0; border-bottom: 2px solid #007bff; padding-bottom: 10px;">Contact Details</h3>
              <p style="margin: 10px 0; color: #6c757d;"><strong style="color: #495057;">Name:</strong> ${validatedData.name}</p>
              <p style="margin: 10px 0; color: #6c757d;"><strong style="color: #495057;">Email:</strong> ${validatedData.email}</p>
              <p style="margin: 10px 0; color: #6c757d;"><strong style="color: #495057;">Subject:</strong> ${validatedData.subject}</p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h3 style="color: #495057; margin-top: 0; border-bottom: 2px solid #28a745; padding-bottom: 10px;">Message</h3>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 4px solid #007bff;">
                <p style="margin: 0; color: #495057; line-height: 1.6;">${validatedData.message}</p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #dee2e6;">
              <p style="color: #6c757d; font-size: 14px; margin: 0;">
                Sent from your portfolio website • ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(201).json({
      success: true,
      message: 'Email sent successfully! I\'ll get back to you soon.',
    });

  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({
      error: 'Failed to send email',
      message: 'Please try again later or contact me directly.',
    });
  }
}