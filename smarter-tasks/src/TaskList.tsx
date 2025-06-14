//we will be rendering the tasklist using the component Task


import Task from "./Task";
import type { TaskItem } from "./types";
interface Props {
  tasks: TaskItem[]; //interface TaskItem contains title, description and dueDate
  deleteTask: (index: number) => void;
}



const TaskList = ({ tasks, deleteTask }: Props) => {
  return (
    <ul>
      {tasks.map((task, idx) => (
        <Task 
          key={idx} //error ow
          title={task.title}
          description={task.description}
          dueDate={task.dueDate}
          onDelete={() => deleteTask(idx)}
        />
      ))}
    </ul>
  );
};
export default TaskList;
