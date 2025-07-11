const { Blog, BlogCategory } = require('../models/blogModel');

// add  new category
const createCategory = async (req, res) => {
    const { name } = req.body;
    // Validate input
    if (!name) {
        return res.status(400).json({ error: 'Category name is required' });
    }
    // Create category
    const category = await BlogCategory.create({ name });
    return res.status(201).json({
        message: 'Category created successfully',
        category,
    });
};
// create new blog
const CreateBlog = async (req, res) => {
    const { title, description, categoryId } = req.body;
    const blog = await Blog.create(
        {
            title,
            description,
            categoryId,
        });
    res.json({ message: "Blog created sucessfully" }, blog);
};
// list all blogs
const getAllBlogs = async (req, res) => {
    const blogs = await Blog.findAll({ include: [{ model: BlogCategory, attributes: ['name'] }] });
    res.json(blogs);
};
// find blog using id
const getAllBlogsById = async (req, res) => {
    const blog = await Blog.findByPk(req.params.uuid, { include: [{ model: BlogCategory, attributes: ['name'] }] });
    res.json(blog);

};
// update blog using their id
const UpdateBlogById = async (req, res) => {
    const { title, description, categoryId } = req.body;
    const blog = await Blog.findByPk(req.params.uuid);
    if (!blog) {
        res.status(400).json({ message: "Blog not found" });
    } else {
        const updatedBlog = await blog.update({ title, description, categoryId });
        res.json({ message: "blog updated sucessfully", blog:updatedBlog })
    }

};
module.exports = {
    CreateBlog,
    getAllBlogs,
    getAllBlogsById,
    UpdateBlogById,
    createCategory,
}