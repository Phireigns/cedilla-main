import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

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
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Send email to restaurant owner
    const ownerMailOptions = {
      from: `"${name}" <${email}>`,
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
      from: '"Cedilla Restaurant" <cedillahk@gmail.com>',
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
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(customerMailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Reservation request received! We will confirm your booking shortly.' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send reservation' 
    });
  }
} 