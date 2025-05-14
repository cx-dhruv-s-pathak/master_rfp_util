import helmet from 'helmet';
import express from 'express';
import { getRfpBySection } from '../controllers/first_order_controllers.js';

const router = express.Router();
app.use(helmet());
app.use(helmet.hidePoweredBy());
app.disable('x-powered-by');

router.get('/v1', getRfpBySection);

export default router;
