import React, { useContext } from 'react'
import { TasksContext } from './TasksContext'

function TaskCount() {
    let [tasks,setTasks]=useContext(TasksContext)
  return (
    <div className="border bg-light rounded-2 p-1">
        <h3 className="text-info text-center mb-3">Number of tasks</h3>
        <h1 className="text-primary-emphasis text-center bg-white border rounded-2">{tasks.length}</h1>
    </div>
  )
}

export default TaskCount