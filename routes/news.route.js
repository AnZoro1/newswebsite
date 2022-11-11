const { Router } = require('express')
const NewsController = require('../controller/news.controller')

const router = Router()
router.post('/news', NewsController.addNews)
router.delete('/news/:id', NewsController.deleteNews)
router.patch('/news/:id', NewsController.changeNews)
router.get('/news/:id', NewsController.getOneNews)
router.get('/news', NewsController.getAllNews)
router.get('/news/categories/:id', NewsController.getNewsFromCategory)
module.exports = router
