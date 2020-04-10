const express = require('express')
const router = express.Router()
const {register} = require('../controllers/userStudent')

router.post('/register', register)

module.exports = router;