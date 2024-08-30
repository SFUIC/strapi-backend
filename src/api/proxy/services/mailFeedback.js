const nodemailer = require("nodemailer");

const userEmail = process.env.SVCMAIL;
const userPass = process.env.SVCMAILPASS;

// Create reusable transporter object using SMTP transport.
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: userEmail,
    pass: userPass,
  },
});

module.exports = {
  mailFeedback: async (from, to, subject, text) => {
    // Format the text argument into a string for email content
    const formattedText = `
      Sender: ${text.firstName} ${text.lastName}
      Email: ${text.email}
      
      Message:
      ${text.message}
    `;

    // Setup e-mail data.
    const options = {
      from,
      to,
      subject,
      text: formattedText, // Use the formatted email content
    };

    try {
      // Send the email and wait for the response.
      const info = await transporter.sendMail(options);
      return info;
    } catch (error) {
      console.error("Error sending email: ", error.message);
      throw error; // Re-throw the error after logging it.
    }
  },
};
