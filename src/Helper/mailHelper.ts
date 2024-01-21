import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
//----------------------------------

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

// Function for sending mail
export const newMessageHelper = async (email: string) => {  
  try {    
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "message",
      text: `Your message has been sent to Junaid.`,
    };
    await transporter.sendMail(mailOptions);     
  } catch (error) {
    console.log(error);
  }
};
