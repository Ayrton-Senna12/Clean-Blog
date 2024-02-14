const router = require('express').Router();
const pageController = require('../controller/pageController');
const postController = require('../controller/postController');


router.get('/', pageController.home);
router.get('/about', pageController.about);
router.get('/addPost',pageController.addPost);
router.post('/new-post', postController.newPost);
router.get('/posts/:id', postController.getPage);

module.exports = router;