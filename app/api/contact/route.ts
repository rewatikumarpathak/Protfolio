import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const transporter = await nodemailer.createTransport({
      port: 587,
      auth: {
        user: "ashlynn15@ethereal.email",
        pass: "N9Eqc8nS2XMhmm6p4q",
      },
    });

    const info = await transporter.sendMail({
    from: `"yubaraj" <ramkrishna@gmail.com>`,
    to: "yubarajpathak009@gmail.com",
    subject: "Some Message",
    text: data.message,
    html:"<b>hello</b>"
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
