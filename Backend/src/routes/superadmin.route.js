import { Router } from "express";
import { addproduct,addDealer,deleteDealer,deleteProduct } from "../controllers/superadmin.controller.js";
import { verifyJWT,verifySuperAdmin } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();
router.route('/products/add').post(
    verifyJWT, 
    verifySuperAdmin, 
     upload.fields([
        { name: 'heroImage', maxCount: 1 },
        { name: 'galleryImages', maxCount: 3 }
    ]),  
    addproduct
);

router.route('/dealers/add').post(
    verifyJWT, 
    verifySuperAdmin, 
    addDealer
);
router.route('/dealers/:id').delete(deleteDealer);
router.route('/products/:id').delete(deleteProduct);
export default router;
