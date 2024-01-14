import React, { useState } from 'react'
import { useContext } from 'react'
import { TasksContext } from './TasksContext'
function Store({children}) {
  let [tasks,setTasks]=useState([])

  return(
    <div>
        <TasksContext.Provider value={[tasks,setTasks]}>
            {children}
        </TasksContext.Provider>
    </div>
  )
}

export default Store