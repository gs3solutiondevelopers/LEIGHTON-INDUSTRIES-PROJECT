import { Router } from "express";

import { submitContact, submitComplaint, submitWarranty } from "../controllers/form.controller.js";
const router = Router();

router.route('/contact').post(submitContact);
router.route('/complaint').post(submitComplaint);
router.route('/warranty').post(submitWarranty);

export default router