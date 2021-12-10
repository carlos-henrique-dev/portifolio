const { i18n } = require('./next-i18next.config')

module.exports = {
	i18n,
	env: {
		SENDER_PASSWORD: process.env.MAILER_PASSWORD,
		SENDER_EMAIL: process.env.MAILER_EMAIL,
		RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL,
	},
	images: {
		domains: ['firebasestorage.googleapis.com']
	}
}