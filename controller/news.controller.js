const News = require('../models/News.model')

const NewsController = {
  addNews: function (req, res) {
    News.create({
      header: req.body.header,
      text: req.body.text,
      categories: req.body.categories,
    }).then((news) => {
      res.json(news)
    })
  },
  deleteNews: function (req, res) {
    News.findByIdAndRemove(req.params.id).then((news) => {
      res.json(news)
    })
  },
  changeNews: function (req, res) {
    News.findByIdAndUpdate(req.params.id, {
      header: req.body.header,
      text: req.body.text,
      categories: req.body.text,
    }).then((news) => {
      res.json(news)
    })
  },
  getOneNews: function (req, res) {
    News.findById(req.params.id).then((news) => {
      res.json(news)
    })
  },
  getAllNews: function (req, res) {
    News.find({}).then((news) => {
      res.json(news)
    })
  },
  getNewsFromCategory: function (req, res) {
    News.find({ categories: req.params.id }, (err, news) => {
      res.json(news)
    }).populate('categories')
  },
}
module.exports = NewsController
