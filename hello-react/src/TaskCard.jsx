import "./TaskCard.css";
const TaskCard = (props) =>{
  return(
    <div className="TaskItem">
        <h2 className = "text-xl font-bold">{props.title}</h2>
        {props.isCompleted ? <p>Completed on: {props.completedOn}</p> : <p>Due on: {props.dueDate}</p>}
        <p>Assignee: {props.assigneeName}</p>

      </div>
  );
}
export default TaskCard