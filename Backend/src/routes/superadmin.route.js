import { Router } from 'express';
import { 
    addproduct, 
    addDealer, 
    deleteDealer, 
    deleteProduct,
    updateProduct,
    updateDealer 
} from '../controllers/superadmin.controller.js';
import { verifyJWT, verifySuperAdmin } from '../middlewares/auth.middleware.js';
import { upload } from '../middlewares/multer.middleware.js';

const router = Router();

// --- Product Routes ---
// These routes are all protected by both JWT and Super Admin role verification.
router.route('/products/add').post(
    verifyJWT, 
    verifySuperAdmin, 
    upload.fields([
        { name: 'heroImage', maxCount: 1 },
        { name: 'galleryImages', maxCount: 3 }
    ]), 
    addproduct
);

router.route('/products/:id')
    .put(
        verifyJWT, 
        verifySuperAdmin, 
        upload.fields([
            { name: 'heroImage', maxCount: 1 },
            { name: 'galleryImages', maxCount: 3 }
        ]),
        updateProduct
    )
    .delete(verifyJWT, verifySuperAdmin, deleteProduct);


// --- Dealer Routes ---
router.route('/dealers/add').post(verifyJWT, verifySuperAdmin, addDealer);

router.route('/dealers/:id')
    .put(verifyJWT, verifySuperAdmin, updateDealer)
    .delete(verifyJWT, verifySuperAdmin, deleteDealer);

export default router;

