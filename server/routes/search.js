import { Router } from 'express'
import { rr } from '../lib/railradar.js'
const router = Router()
router.get('/stations', async (req, res) => {
  try { res.json(await rr('/search/stations', { query: req.query.q }, 300)) }
  catch (e) { res.status(500).json({ error: e.message }) }
})
router.get('/trains', async (req, res) => {
  try { res.json(await rr('/search/trains', { query: req.query.q }, 300)) }
  catch (e) { res.status(500).json({ error: e.message }) }
})
export default router