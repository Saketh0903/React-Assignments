import React, { useContext } from 'react'
import { TasksContext } from './TasksContext'

function TasksList() {
    let [tasks,setTasks]=useContext(TasksContext)
    function deleteUser(index){
        let arr=[...tasks]
        arr.splice(index,1)
        setTasks(arr)
    }
  return (
    <div className="bg-light border rounded-2 p-1">
        <h3 className="text-primary text-center">Tasks List</h3>
        <div className="row">
        <div>
            {
                (tasks.length===0)?<h5 className="text-center">No Tasks</h5>
                :
            
                tasks.map((element,index)=>
                <div className="row bg-white mx-auto border rounded-2 p-1 mb-3">
                <div className="col-9 ">
                <p key={index} className="text-info">{element.tasks}</p>
                </div>
                <div className="col-3">
                <button className="btn btn-success" onClick={()=>deleteUser(index)}>Finish</button>
                </div>
                </div>
                )
                
            
        }
        </div>
        </div>
    </div>
  )
}

export default TasksList