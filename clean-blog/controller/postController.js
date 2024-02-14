const Post = require('../models/post');

const getPage = async (req, res)=>{
    const id = req.params.id;
    const posts = await Post.find({ _id : id });
    res.render('site/post.ejs', { posts })
}
const newPost = async (req, res)=>{
    await Post.create(req.body);
     res.redirect('/');
}

module.exports = {
    newPost,
    getPage
 }