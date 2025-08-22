import { Router } from "express";
import { addproduct,addDealer,deleteDealer } from "../controllers/superadmin.controller.js";
import { verifyJWT,verifySuperAdmin } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();
router.route('/products/add').post(
    verifyJWT, 
    verifySuperAdmin, 
    upload.single('image'), 
    addproduct
);

router.route('/dealers/add').post(
    verifyJWT, 
    verifySuperAdmin, 
    addDealer
);
router.route('/dealers/:id').delete(deleteDealer);
export default router;
