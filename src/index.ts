import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRouter from './routes/userRouter'

dotenv.config()

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/user', userRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('API post-phrase is running...')
})

try {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running in http://localhost:${process.env.PORT}...`)
  })
} catch (err: any) {
  console.log(`Error occurred: ${err.message}`)
};
