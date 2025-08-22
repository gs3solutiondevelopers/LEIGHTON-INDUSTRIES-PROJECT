import multer from 'multer'

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./public/images/products");
    },
    filename:function (req,file,cb){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random()*1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
    }
})

export const upload = multer({
    storage:storage
})