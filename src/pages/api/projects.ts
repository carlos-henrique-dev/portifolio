import path from 'path'
import fs from 'fs'

export default async function (req, res) {
	const { query } = req

	try {
		const fileName = query.project.replace(/-/g, '_')

		const filePath = path.join(process.cwd(), `src/data/projects/${fileName}.json`)

		const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })

		res.status(200).json({ status: 'OK', data: fileContent });
	} catch (error) {
		res.status(500).json({ status: 'NOT OK', data: null });
	}
}