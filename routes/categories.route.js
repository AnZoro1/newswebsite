const { Router } = require('express')
const CategoryController = require('../controller/categories.controller')

const router = Router()
router.post('/categories', CategoryController.addCategory)
router.delete('/categories', CategoryController.deleteCategory)
router.get('/categories', CategoryController.getAllCategory)
module.exports = router
