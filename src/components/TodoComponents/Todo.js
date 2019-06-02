import React from 'react';
import './Todo.css'

class Todo extends React.Component {
    render() {
        return (
            <div
                className={`${this.props.taskOnProps.completed ? 'completed' : ""}`}
                onClick={() => this.props.toggleItem(this.props.taskOnProps.date)}
            >
                <h1>{this.props.taskOnProps.task}</h1>
            </div>
        )
    }
}

export default Todo;