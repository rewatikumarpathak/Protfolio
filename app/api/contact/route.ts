import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const transporter = await nodemailer.createTransport({
      secure: true,
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: "pathakrewati111@gmail.com",
        pass: "dtvpikrrpcdfrlgb",
      },
    });

    await transporter.sendMail({
      to: "rabinpathak001@gmail.com",
      subject: "Portfolio Message",
      html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #dddddd; border-radius: 8px; background-color: #ffffff; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
      <h3 style="color: #2a64ad; margin-bottom: 15px; border-bottom: 2px solid #eeeeee; padding-bottom: 10px;">
        New Message from Your Portfolio
      </h3>
      <p style="font-size: 1.1em; margin-bottom: 10px;">
        This message was sent by <strong style="color: #0056b3;">${data.name}</strong> and their email is <a href="mailto:${data.email}" style="color: #007bff; text-decoration: none;">${data.email}</a>.
      </p>
      <div style="background-color: #f9f9f9; border-left: 4px solid #007bff; padding: 15px; border-radius: 4px; margin-top: 20px;">
        <p style="margin: 0; font-style: italic; color: #555555;">
          ${data.message}
        </p>
      </div>
      <p style="font-size: 0.9em; color: #777777; margin-top: 25px; text-align: center;">
        This is an automated message from your portfolio website.
      </p>
    </div>
  `,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
