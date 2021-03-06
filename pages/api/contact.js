const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: process.env.NEXT_USER,
        pass: process.env.NEXT_PASS,
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
            console.log("Email sent: " + info.response);
            res.status(200).send("Finally Done");
        }
    });
}
