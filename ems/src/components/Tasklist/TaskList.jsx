import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FieldTask from "./FieldTask";

function TaskList({data}) {
  console.log(data);
  
  return (
    <div
      id="taskList"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10"
    >
      {data.tasks.map((elem,idx)=>{
        if(elem.active){
          return <AcceptTask key={idx}/>
        }
        if(elem.NewTask){
          return <NewTask key={idx}/>
        }
        if(elem.completed){
          return <CompleteTask key={idx}/>
        }
        if(elem.failed){
          return <FieldTask key={idx}/>
        }
      })}
    </div>
  );
}

export default TaskList;

//52
