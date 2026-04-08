import axios from 'axios'
import NodeCache from 'node-cache'

const BASE = 'https://api.railradar.org/api/v1'
const cache = new NodeCache({ stdTTL: 30 })

export async function rr(path, params = {}, ttl = 30) {
  const key = path + JSON.stringify(params)
  const hit = cache.get(key)
  if (hit) return hit
  const { data } = await axios.get(`${BASE}${path}`, {
    params,
    timeout: 8000
  })
  cache.set(key, data, ttl)
  return data
}