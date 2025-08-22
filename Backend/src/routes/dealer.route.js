// src/routes/dealer.routes.js

import { Router } from 'express';
import { getAllDealers } from '../controllers/dealer.controller.js';

const router = Router();

// This is a public route, so no authentication is needed
router.route('/').get(getAllDealers);

export default router;