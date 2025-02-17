const UserController = require('../controllers/UserController')

const router = require('express').Router()

router.post('/login', UserController.login)
router.put('/login', UserController.forgotPassword)
router.post('/register', UserController.register)
router.post('/googleLogin', UserController.googleLogin)

module.exports = router