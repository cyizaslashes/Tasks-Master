const express = require('express');
const {getUsers, updateUser,deleteUser} = require('../controllers/users')
const {verifyUser}= require("../middleware/verifyToken")

const router = express.Router()

router.get("/",getUsers)
router.put("/:id",verifyUser, updateUser)
router.delete("/:id",verifyUser, deleteUser)
module.exports = router