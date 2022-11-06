const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.NEXT_MAIL_USERNAME,
    pass: process.env.NEXT_MAIL_PASSWORD,
    clientId: process.env.NEXT_OAUTH_CLIENT_ID,
    clientSecret: process.env.NEXT_OAUTH_CLIENT_SECRET,
    refreshToken: process.env.NEXT_OAUTH_REFRESH_TOKEN,
  },
});
export default function (req, res) {
  const mailOptions = {
    from: `${req.body.email}`,
    to: "abhidadhaniya23@gmail.com",
    subject: `Email by ${req.body.name}`,
    html: `Name : ${req.body.name} <br> Email : ${req.body.email} <br> Subject : ${req.body.subject} <br> Message : ${req.body.msg}`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      //   console.log("Email sent: " + info.response);
      res.status(200).send("Finally Done");
    }
  });
}
