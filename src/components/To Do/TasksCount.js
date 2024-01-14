import React from "react";

function TasksCount(props) {
  return (
    <div>

      <p className="lead fs-1 text-center bg-dark text-info">Tasks count</p>
      <p className="lead">{props.tasks.length}</p>
    </div>
  );
}

export default TasksCount;