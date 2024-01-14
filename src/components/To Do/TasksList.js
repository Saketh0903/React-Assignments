import React from 'react'

function TasksList(props) {
  return (
    <div>
         <p className="lead fs-1 text-center bg-dark text-info">List of Tasks</p>
            {
                props.tasks.map((taskObj,index)=><p className='lead' key={index}>{taskObj.newTask}</p>)
            }
    </div>
  )
}

export default TasksList