import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FieldTask from "./FieldTask";

function TaskList({data}) {
  console.log("TaskList Data:", data); // Add this for debugging

  if (!data || !data.tasks) {
    return <div className="text-center mt-5 text-white">No tasks available</div>;
  }
  
  return (
    <div
      id="taskList"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10"
    >
      {Array.isArray(data.tasks) && data.tasks.map((task, idx) => {
        console.log("Task:", task); // Add this for debugging
        
        if (task.newTask) {
          return <NewTask key={idx} data={task} employeeData={data} />;
        }
        if (task.active) {
          return <AcceptTask key={idx} data={task} employeeData={data} />;
        }
        if (task.completed) {
          return <CompleteTask key={idx} data={task} employeeData={data} />;
        }
        if (task.failed) {
          return <FieldTask key={idx} data={task} employeeData={data} />;
        }
        return null;
      })}
    </div>
  );
}

export default TaskList;

//52
