import { PORT } from './config/guard-env'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())

app.get('/api', (_, res) => {
  res.json({ message: 'Hello from Backend Server' })
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
