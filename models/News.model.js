const mongoose = require('mongoose')
const NewsSchema = mongoose.Schema({
  header: String,
  text: String,
  categories: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Category',
  },
})

const News = mongoose.model('News', NewsSchema)
module.exports = News
