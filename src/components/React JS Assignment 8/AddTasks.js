import React, { useContext } from 'react'
import { TasksContext } from './TasksContext'
import {useForm} from 'react-hook-form'

function AddTasks() {
    let {register,handleSubmit}=useForm()
    let [tasks,setTasks]=useContext(TasksContext)
    function handleFormSubmit(taskObj){
        setTasks([...tasks,taskObj])
    }
  return (
    <div className="bg-light border rounded-2 p-1">
        <h3 className="text-secondary text-center">Add Tasks</h3>
        <form action="" onSubmit={handleSubmit(handleFormSubmit)} className="mb-3 border">
            <div className="mb-3">
            <input type="text" {...register('tasks',{required:true})} placeholder="Add a task" className="form-control"/>
            </div>
            <button className="btn btn-info d-block mx-auto">Add Task</button>
        </form>
    </div>
  )
}

export default AddTasks