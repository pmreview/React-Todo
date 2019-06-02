import React from 'react';

class TodoForm extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.addTask}>
                    <input
                        placeholder="Task"
                        onChange={this.props.handleChanges}
                        value={this.props.todo}
                        name="task"
                    />
                    <button type="submit">Add Task</button>
                    <button type="button">Clear Completed</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;