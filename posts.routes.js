const router = require('express').Router();
const postcontroller = require('..controllers/posts.controller');

router.get('/', postcontroller.getAllPost);
router.get('/', postcontroller.getPost);
router.post('/:id', postcontroller.createPost);
router.put('/', postsontroller.updatePost);
router.delete('/:id', postcontroller.deletePost);

module.exports = router;