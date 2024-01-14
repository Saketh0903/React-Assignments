import {useState} from "react";
import { useForm } from "react-hook-form";


function AddTask(props) {
  let { register, handleSubmit } = useForm();



  function handleFormSubmit(taskObj){
     props.setTasks([...props.tasks,taskObj])
  }

  return (
    <div>
      <p className="lead fs-1 text-center bg-dark text-info">Add a Task</p>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          type="text"
          {...register("newTask")}
          id=""
          className="form-control mb-4"
          placeholder="Enter a task...."
        />
        <button
          type="submit"
          className="btn btn-info d-block mx-auto text-white "
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTask;