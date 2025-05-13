import express from 'express';
import cors from 'cors';
import router from './routes/first_order_routes.js';
import helmet from 'helmet';

const app = express();
app.use(helmet({
    hidePoweredBy: true,
    hsts: {
      maxAge: 31536000, // 1 year
      includeSubDomains: true,
      preload: true,
    },
  }));  

app.use(cors());
app.use(express.json());

app.use('/rfp', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
