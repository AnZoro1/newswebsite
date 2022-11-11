const Category = require('../models/Category.model')


const CategoryController = {
  
  addCategory: function (req,res) {
    Category.create({
      header: req.body.header,
    }).then((categories) => {
      res.json(categories)
    })
  },
  deleteCategory: function (req, res) {
    Category.findByIdAndRemove(req.params.id).then((categories) => {
      res.json(categories)
    })
  },
  getAllCategory: function (req, res) {
    Category.find({}).then((categories) => {
      res.json(categories)
    })
  }
}
module.exports = CategoryController
