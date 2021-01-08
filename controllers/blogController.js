const Blog = require('../models/Blog');

const blog_index=(req, res) => {
    Blog.find()
        .then((result) => {
            res.render('blogs/index', {title: 'All Blogs', blogs: result});
        })
        .catch((err) => {
            res.send(err)
        })
}


const blog_details=(req, res) => {
    const id=req.params.id;

    Blog.findById(id)
        .then((result) => {
            res.render('blogs/details',{title : `${result.title}`,blog: result});
        })
        .catch((err) => {
            console.log(err);
        })
};

const blog_create=(req, res) => {
    res.render('blogs/create', {title: 'Create'});
};

const blog_store=(req, res) => {
    
    const newBlog=new Blog({
        title: req.body.title,
        snippet: req.body.snippet,
        body: req.body.body
    });

    newBlog.save()
        .then((result) => {
            res.redirect('/');
        }).catch((err) => res.send(err));
};

const blog_delete=(req, res) => {
    const id=req.params.id;

    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({redirect: '/'});
        })
        .catch((err) => {
            console.log(err);
        })
};

module.exports={
    blog_index,
    blog_details,
    blog_create,
    blog_store,
    blog_delete
}