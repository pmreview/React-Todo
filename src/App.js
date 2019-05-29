import React from 'react';

import { data } from './data';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
        taskData: data,
        task: "",
        date: "",
        completed: false
    }
  }

  addTask = e => {
    e.preventDefault();

    const newTodo = {
      task: this.state.task,
      date: Date.now(),
      completed: this.state.completed
    };
    
    this.setState({
      taskData: [...this.state.taskData, newTodo],
      task: "",
      date: "",
      completed: false
    })
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>React ToDo List</h2>
        <TodoList taskData={this.state.taskData}/>
        <TodoForm addTask={this.addTask} handleChanges={this.handleChanges} todo={this.state.task} />
      </div>
    );
  }
}

export default App;
