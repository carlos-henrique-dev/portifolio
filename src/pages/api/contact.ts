export default function (req, res) {
	require('dotenv').config()

		const PASSWORD = process.env.SENDER_PASSWORD
		const EMAIL = process.env.SENDER_EMAIL
		const RECIPIENT = process.env.RECIPIENT_EMAIL

		let nodemailer = require('nodemailer')

		const transporter = nodemailer.createTransport({
			port: 465,
			host: "smtp.gmail.com",
			auth: {
				user: EMAIL,
				pass: PASSWORD,
			},
			secure: true,
		})

		const mailData = {
			from: EMAIL,
			to: RECIPIENT,
			subject: `Mensagem de ${req.body.name}`,
			text: req.body.message,
			html: `	<main>
					<h1>Você recebeu um e-mail de contato</h1>
					<span>${req.body.name} te enviou uma mensagem pelo formuário do site</span>
					<section>
						<h2 style="margin-bottom: 0;">Remetente: ${req.body.email}</h2>

						<h3 style="margin-bottom: 0;">Mensagem:</h3>
						<p style="background-color: #eee; max-width: 300px; white-space: pre-wrap;" >${req.body.message}</p>
					</section>
				</main>`
		}

		transporter.sendMail(mailData, function (err, info) {
			if (err) {
				console.log('err', err)
				res.status(500);
				res.end();
			}
			else {
				console.log('info', info)
				res.status(200);
				res.end();
			}
	})
}