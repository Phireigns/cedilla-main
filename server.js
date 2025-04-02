import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
config();

// Verify environment variables are loaded
console.log('Environment variables loaded:');
console.log('EMAIL_USER exists:', !!process.env.EMAIL_USER);
console.log('EMAIL_PASSWORD exists:', !!process.env.EMAIL_PASSWORD);
console.log('EMAIL_PASSWORD length:', process.env.EMAIL_PASSWORD ? process.env.EMAIL_PASSWORD.length : 0);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API route for handling reservation submissions
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, phone, guests, date, time, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !guests || !date || !time) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,  // Changed to 465 for secure SSL
      secure: true, // Use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Verify the transporter can connect
    try {
      const verify = await transporter.verify();
      console.log('Transporter verification:', verify);
    } catch (verifyError) {
      console.error('Transporter verification failed:', verifyError);
      throw verifyError;
    }

    console.log(`Using email account: ${process.env.EMAIL_USER}`);

    // Send email to restaurant owner
    const ownerMailOptions = {
      from: `"Cedilla Reservation" <${process.env.EMAIL_USER}>`,
      to: 'phireigns@gmail.com', // Restaurant email
      subject: `New Reservation: ${name} for ${guests} guests on ${date}`,
      html: `
        <h2>New Reservation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Special Requests:</strong> ${message || 'None'}</p>
      `,
    };

    // Send confirmation email to customer
    const customerMailOptions = {
      from: `"Cedilla Restaurant" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Your Reservation at Cedilla Restaurant',
      html: `
        <h2>Thank you for your reservation request!</h2>
        <p>Dear ${name},</p>
        <p>We have received your reservation request for ${guests} guests on ${date} at ${time}.</p>
        <p>We will confirm your reservation shortly. If you need to make any changes, please contact us at:</p>
        <p>Phone: +852 9165 0827</p>
        <p>Email: cedillahk@gmail.com</p>
        <p><strong>Reservation Details:</strong></p>
        <ul>
          <li>Date: ${date}</li>
          <li>Time: ${time}</li>
          <li>Number of Guests: ${guests}</li>
          ${message ? `<li>Special Requests: ${message}</li>` : ''}
        </ul>
        <p>We look forward to welcoming you to Cedilla Restaurant!</p>
        <p>Warm Regards,<br>The Cedilla Restaurant Team</p>
      `,
    };

    // Send both emails
    try {
      const ownerInfo = await transporter.sendMail(ownerMailOptions);
      console.log('Owner email sent: ', ownerInfo.messageId);
      
      const customerInfo = await transporter.sendMail(customerMailOptions);
      console.log('Customer email sent: ', customerInfo.messageId);
      
      console.log('Emails sent successfully');

      res.status(200).json({ 
        success: true, 
        message: 'Reservation request received! We will confirm your booking shortly.' 
      });
    } catch (emailError) {
      console.error('Error in sending email:', emailError);
      throw emailError;
    }
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send reservation' 
    });
  }
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 