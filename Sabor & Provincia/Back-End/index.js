import express from 'express';
import cors from 'cors';
import apiRouter from "./apiRouter.js";
import { config } from "./config/envConfig.js";

const app = express()
app.use(cors({

}));

app.use(express.json());
app.use('/api', apiRouter);

app.listen(config.PORT, () => {
  console.log(`Server is running on http://localhost:${config.PORT}`);
  console.log(`Server is running on http://localhost:${config.PORT}/api`);
});