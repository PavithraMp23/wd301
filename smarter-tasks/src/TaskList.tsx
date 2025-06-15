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
          key={task.id} //error ow
          item={task}
          removeTask={() => deleteTask(idx)}
        />
      ))}
    </ul>
  );
};
export default TaskList;
