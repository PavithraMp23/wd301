import React from "react";
import "./TaskCard.css";
interface TaskCardProp{
 title:string;
 assigneeName:string;
 isCompleted?:boolean;
 completedAtDate?:string;
 dueDate?:string;
}
const TaskCard = (TaskCardProp) =>{
  return(
    <div className="TaskItem">
        <h2 className = "text-xl font-bold">{TaskCardProp.title}</h2>
        {TaskCardProp.isCompleted ? <p>Completed on: {TaskCardProp.completedAtDate}</p> : <p>Due on: {TaskCardProp.dueDate}</p>}
        <p>Assignee: {TaskCardProp.assigneeName}</p>

      </div>
  );
}
export default TaskCard