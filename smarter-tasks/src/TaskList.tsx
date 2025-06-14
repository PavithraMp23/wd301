//we will be rendering the tasklist using the component Task

import React from "react";
import Task from "./Task";
import type { TaskItem } from "./types";
interface Props {
  tasks: TaskItem[]; //interface TaskItem contains title, description and dueDate
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface State {}

class TaskList extends React.Component<Props, State> {
  render() {
    return this.props.tasks.map((task, idx) => (
      <Task
        key={idx}
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
      />
    ));
  }
}
export default TaskList;
