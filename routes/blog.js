const express=require('express');
const router=express.Router();
const Blog = require('../models/Blog');
const blogController=require('../controllers/blogController');


router.get('/', blogController.blog_index);

router.post('/', blogController.blog_store);


//Create Blog Page
router.get('/create', blogController.blog_create);


router.get('/:id', blogController.blog_details);

router.delete('/:id', blogController.blog_delete);



module.exports=router;