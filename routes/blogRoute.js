require('dotenv').config();
const router = require('express').Router();
const { getAllBlogs, getAllBlogsById, CreateBlog, UpdateBlogById,createCategory } = require('../controller/blogController');
// add a new category
router.post('/addCategory',createCategory);

router
    .route('/')
    .post(CreateBlog) //route to post a blog
    .get(getAllBlogs);// route to get all blogs
router
    .route('/:uuid') // route to post blog
    .get(getAllBlogsById) // route to get blog by id
    .patch(UpdateBlogById); // route to update blog by id

module.exports = router;