const { Router } = require('express')
const CommentsController = require('../controller/comments.controller')

const router = Router()
router.post('/comments', CommentsController.addCommentForNews)
router.delete('/comments/:id', CommentsController.deleteCommentForNews)
router.get('/comments/news/:id', CommentsController.getAllCommentForNews)
module.exports = router
