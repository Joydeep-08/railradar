import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'
import searchRoutes from './routes/search.js'
import trainRoutes from './routes/trains.js'
import stationRoutes from './routes/stations.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 4000

app.use(helmet())
app.use(cors({ origin: process.env.CLIENT_URL }))
app.use(express.json())
app.use('/api', rateLimit({ windowMs: 60_000, max: 60 }))
app.use('/api/search', searchRoutes)
app.use('/api/trains', trainRoutes)
app.use('/api/stations', stationRoutes)

app.listen(PORT, () => console.log(`Server on port ${PORT}`))
