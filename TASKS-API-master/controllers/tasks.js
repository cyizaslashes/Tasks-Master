const Task = require("../models/Task")

const getAllTasks = async(req,res, next)=>{
    try{
        const tasks = await Task.find()
        res.status(200).json(tasks)
    }catch(err){
    next(err)
    }
}
const getAllTask = async(req,res, next)=>{
    try{
        const tasks = await Task.findById(req.params.id)
        res.status(200).json(tasks)
    }catch(err){
    next(err)
    }
}
const createTask = async (req,res,next)=>{
    const newTask = new Task(req.body)
    try {
        const savedTask = await newTask.save()
        res.status(201).json(savedTask)
    } catch (error) {
        next(error);
    }
}
const updateTasks = async (req,res,next)=>{
    try{
        const updateTask = await Task.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updateTask)
    }catch(error) {
        next(error);
    }
}
const deleteTasks = async (req,res,next)=>{
    try {
        await Task.findByIdAndDelete(req.params.id)
        res.status(200).json("The task has been deleted successfully")
    } 
        
    catch (error) {
        next(error)
    } 
        
}
module.exports = {createTask,updateTasks,getAllTasks, deleteTasks, getAllTask}