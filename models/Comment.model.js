const mongoose = require('mongoose')
const CommentSchema = mongoose.Schema({
  commentatorName: String,
  textComment: String,
  forNews: String,
  news: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'News',
  },
})
const Comment = mongoose.model('Comment', CommentSchema)
module.exports = Comment
