const {createTask,updateTasks,getAllTasks,deleteTasks, getAllTask} = require('../controllers/tasks')
const express = require('express')
const {verifyUser, verifyToken} = require("../middleware/verifyToken")
const router = express.Router()

// CREATE TASK
router.post("/", verifyToken, createTask)
// GET TASKS
router.get("/",verifyToken, getAllTasks)
router.get("/:id",verifyToken, getAllTask)
// UPDATE TASK
router.put("/:id", verifyToken, updateTasks)
// DELETE TASK
router.delete("/:id", verifyToken, deleteTasks)

module.exports = router
