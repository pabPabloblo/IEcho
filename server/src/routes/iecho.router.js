import { Router } from 'express'
import { iechoController } from '../controllers/'
const router = Router()

router.get('/', iechoController.get)

export default router
