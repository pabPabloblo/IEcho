import { Router } from 'express'
import iecho from './iecho.router'

const router = Router()

router.use('/iecho', iecho)

export default router
