import { useState } from "react";
import AddTask from "./AddTasks";
import TasksList from "./TasksList";
import TasksCount from "./TasksCount";

function ManageTasks() {
  let [tasks, setTasks] = useState([]);

  return (
    <div>
      <h1 className="text-center display-1 text-secondary">To-Do List</h1>
      <div className="row">
        <div className="col-sm-4 border p-4">
          <AddTask setTasks={setTasks} tasks={tasks} />
        </div>
        <div className="col-sm-4  border p-4">
          <TasksList tasks={tasks} />
        </div>
        <div className="col-sm-4  border p-4">
          <TasksCount tasks={tasks} />
        </div>
      </div>
    </div>
  );
}

export default ManageTasks;