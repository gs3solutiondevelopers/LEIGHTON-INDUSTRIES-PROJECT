import { Router } from 'express';
import { loginAdmin, logoutAdmin,getComplaints,getContacts,getWarranties,getProducts } from '../controllers/admin.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import { getDealers } from '../controllers/admin.controller.js';

const router = Router();

router.route('/login').post(loginAdmin); //Admin leighton123,    //Super Admin  123456

router.route('/logout').post(logoutAdmin);
router.route('/contacts').get(verifyJWT, getContacts);
router.route('/complaints').get(verifyJWT, getComplaints);
router.route('/warranties').get(verifyJWT, getWarranties);
router.route('/dealers').get(verifyJWT, getDealers);
router.route('/products').get(verifyJWT,getProducts) 

export default router;