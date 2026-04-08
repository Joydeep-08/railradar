import { Router } from 'express'
import { rr } from '../lib/railradar.js'
const router = Router()
router.get('/:code/live', async (req, res) => {
  try { res.json(await rr(`/stations/${req.params.code}/live`, {}, 30)) }
  catch (e) { res.status(500).json({ error: e.message }) }
})
router.get('/:code/info', async (req, res) => {
  try { res.json(await rr(`/stations/${req.params.code}/info`, {}, 600)) }
  catch (e) { res.status(500).json({ error: e.message }) }
})
export default router