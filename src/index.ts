import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import database from './data/database'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('API post-phrase is running...')
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running in http://localhost/${process.env.PORT}...`)
});

(async () => {
  try {
    await database.sync({ alter: true })
    console.log('DB is ready...')
  } catch (err: any) {
    console.log(err.message)
  }
})()


  