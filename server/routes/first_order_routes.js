import express from 'express';
import { getRfpBySection } from '../controllers/first_order_controllers.js';

const router = express.Router();

router.get('/v1', getRfpBySection);

export default router;
