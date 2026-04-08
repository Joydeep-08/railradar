import { Router } from 'express'
import { rr } from '../lib/railradar.js'
const router = Router()
router.get('/live-map', async (_req, res) => {
  try { res.json(await rr('/trains/live-map', {}, 20)) }
  catch (e) { res.status(500).json({ error: e.message }) }
})
router.get('/:number/schedule', async (req, res) => {
  try { res.json(await rr(`/trains/${req.params.number}/schedule`, {}, 300)) }
  catch (e) { res.status(500).json({ error: e.message }) }
})
router.get('/:number/average-delay', async (req, res) => {
  try { res.json(await rr(`/trains/${req.params.number}/average-delay`, {}, 600)) }
  catch (e) { res.status(500).json({ error: e.message }) }
})
router.get('/:number', async (req, res) => {
  try { res.json(await rr(`/trains/${req.params.number}`, {}, 60)) }
  catch (e) { res.status(500).json({ error: e.message }) }
})
export default router