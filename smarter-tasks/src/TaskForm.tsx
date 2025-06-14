import React from "react";
import type { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void; //the prop to be used
} // no internal state usage nor does it expect
interface TaskFormState {
  title: string;
  description: string;
  dueDate: string;
} //state stores what the user types in

//accepts a taskitem (taskformprops),calls parent function addTask and clears
//the input field after the submission
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      dueDate: "",
    };
  } //intialises

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate,
    };
    if (newTask.title === "" || newTask.dueDate === "") {
      return; //function will return early
    }
    this.props.addTask(newTask); //passes to parent
    this.setState({ title: "", description: "", dueDate: "" }); //resets
  };

  inputRef = React.createRef<HTMLInputElement>();
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value }); //changes the local state when user types in
  };

  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ description: event.target.value });
  };

  dateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ dueDate: event.target.value });
  };
  render() {
    return (
      //controlled components driven by state
      <div>
        <div>Task Form</div>
        <form className="border flex-row" onSubmit={this.addTask}>
          <input
            className="border"
            type="text"
            id="todoTitle"
            ref={this.inputRef}
            value={this.state.title}
            onChange={this.titleChanged}
          />
          <input
            className="border"
            type="text"
            id="todoDescription"
            ref={this.inputRef}
            value={this.state.description}
            onChange={this.descriptionChanged}
          />
          <input
            className="border"
            type="date"
            id="todoDueDate"
            ref={this.inputRef}
            value={this.state.dueDate}
            onChange={this.dateChanged}
          />
          <button type="submit" id="addTaskButton">
            Add item
          </button>
        </form>
      </div>
    );
  }
}
export default TaskForm;
