import nodemailer from 'nodemailer';

interface FormData {
  [key: string]: unknown;
}

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
}

export async function sendNotificationEmail(formData: FormData): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const formattedData = {
    Name: formData.Last_Name || '-',
    Email: formData.Email || '-',
    Phone: formData.Phone || '-',
    'Lead Source': formData.Lead_Source || '-',
    'Lead Sub Source': formData.Lead_Sub_Source || '-',
    'UTM Campaign': formData.UTM_Campaign || '-',
    'Page Visited': formData.Page_Visited || '-',
    Campaign: 'Fertigenyx',
  };

  const htmlTemplate = `
    <div style="font-family: Arial, Helvetica, sans-serif; background-color:#f4f6f8; padding:30px;">
      <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:6px; overflow:hidden;">
        
        <div style="background:#1f2937; padding:20px;">
          <h2 style="color:#ffffff; margin:0;">New Form Submission</h2>
        </div>

        <div style="padding:25px; color:#333;">
          <p style="font-size:14px;">
            You have received a new form submission. The details are provided below:
          </p>

          <table style="width:100%; border-collapse:collapse; font-size:14px;">
            ${Object.entries(formattedData)
              .map(
                ([key, value]) => `
                <tr>
                  <td style="padding:10px; border:1px solid #e5e7eb; background:#f9fafb; font-weight:bold;">
                    ${key}
                  </td>
                  <td style="padding:10px; border:1px solid #e5e7eb;">
                    ${value ?? '-'}
                  </td>
                </tr>
              `
              )
              .join('')}
          </table>

          <p style="margin-top:20px; font-size:13px; color:#6b7280;">
            This is an automated notification. Please do not reply to this email.
          </p>
        </div>

        <div style="background:#f3f4f6; padding:15px; text-align:center; font-size:12px; color:#6b7280;">
          © ${new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>

      </div>
    </div>
  `;

  const mailOptions: MailOptions = {
    from: `"Form Notification" <${process.env.EMAIL_USER}>`,
    to: process.env.NOTIFY_EMAIL!,
    subject: 'New Form Submission',
    html: htmlTemplate,
  };

  await transporter.sendMail(mailOptions);
}
