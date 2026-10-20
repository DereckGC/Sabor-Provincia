import express from 'express'
const apiRouter = express.Router()
import leadsRouter from './routes/leadsRouter.js'

apiRouter.use('/lead', leadsRouter)

apiRouter.get('/', (req, res) => {
  res.send('API is running')
})

export default apiRouter