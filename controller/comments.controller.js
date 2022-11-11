const Comment = require('../models/Comment.model')

const CommentsController = {
  addCommentForNews: function (req, res) {
    Comment.create({
      commentatorName: req.body.commentatorName,
      textComment: req.body.textComment,
      forNews: req.body.forNews,
      news: req.body.news,
    }).then((comments) => {
      res.json(comments)
    })
  },
  deleteCommentForNews: function (req, res) {
    Comment.findByIdAndRemove(req.params.id).then((comments) => {
      res.json(comments)
    })
  },
  getAllCommentForNews: function (req, res) {
    Comment.find({ news: req.params.id }, (err, comments) => {
      res.json(comments)
    }).populate('news')
  },
}
module.exports = CommentsController
