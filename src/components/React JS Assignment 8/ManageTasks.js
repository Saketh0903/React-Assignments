import React,{useContext} from 'react'
import Store from './Store'
import AddTasks from './AddTasks'
import TasksList from './TasksList'
import TaskCount from './TaskCount'
import { TasksContext } from './TasksContext'


function ManageTasks() {
  return (
    <div className="container">
        <Store>
          <h1 className="display-1 text-white text-center">To Do List</h1>
            <div className="row">
                <div className="col-4 mt-3">
                <AddTasks />
                </div>
            <div className="col-4 mt-3">
            <TasksList />
            </div>
            <div className="col-4 mt-3">
                <TaskCount />
            </div>
            </div>
            
        </Store>
    </div>
  )
}

export default ManageTasks