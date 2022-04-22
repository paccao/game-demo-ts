import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import cors from 'cors'

dotenv.config()

const port = process.env.PORT
const app: Express = express()

app.use(helmet())
app.use(express.json())

const environment = process.env.NODE_ENV
const isDevelopment = environment === 'development'
if (isDevelopment) {
	app.use(cors())
}

app.get('/', (req: Request, res: Response) => {
	res.send('Hello there. 🌃')
})

app.listen(port, () => {
	console.log(`Server up and running on port ${port}.`)
	console.log(`
	http://localhost:8080/`)
})
