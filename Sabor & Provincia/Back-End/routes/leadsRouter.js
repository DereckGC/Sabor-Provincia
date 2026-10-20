import express from 'express';
const router = express.Router();

import {createLead} from '../controllers/leadController.js' 

router.post('/', createLead);

export default router;