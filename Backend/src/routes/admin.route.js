import { Router } from 'express';
import { loginAdmin, logoutAdmin,getComplaints,getContacts,getWarranties } from '../controllers/admin.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = Router();

router.route('/login').post(loginAdmin); //Admin leighton123,    //Super Admin  123456

router.route('/logout').post(logoutAdmin);
router.route('/contacts').get(verifyJWT, getContacts);
router.route('/complaints').get(verifyJWT, getComplaints);
router.route('/warranties').get(verifyJWT, getWarranties);

export default router;