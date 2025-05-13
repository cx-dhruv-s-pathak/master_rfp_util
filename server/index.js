import helmet from 'helmet';
import express from 'express';
import cors from 'cors';
import router from './routes/first_order_routes.js';

const app = express();
app.use(helmet({
  hidePoweredBy: true,
  noSniff: true,
  xssFilter: true,
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));  

app.use(cors());
app.use(express.json());
app.disable('x-powered-by');

app.use('/rfp', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
