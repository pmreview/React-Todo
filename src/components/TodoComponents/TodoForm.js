import React from 'react';

class TodoForm extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.addTask}>
                    <input
                        placeholder="Task"
                        onChange={this.props.handleChanges}
                        value={this.props.name}
                        name="task"
                    />
                    <button>Add Task</button>
                    <button>Clear Completed</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;