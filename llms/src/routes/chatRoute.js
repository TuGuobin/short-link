import express from 'express'
import openaiService from '../services/openaiService.js'

const router = express.Router()

router.post('/chat', async (req, res) => {
  try {
    const { messages } = req.body
    const result = await openaiService.chat(messages)
    res.json(result)
  } catch (error) {
    console.error('Chat route error:', error)
    res.status(500).json({ error: error.message })
  }
})

router.get('/', (req, res) => {
  res.send('API is running')
})

export default router