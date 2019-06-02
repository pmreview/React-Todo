// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo'

class TodoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.taskData.map(taskFromMap => {
                    return <Todo key={taskFromMap.date} taskOnProps={taskFromMap} toggleItem={this.props.toggleItem} />
                })}
            </div>
        )
    }
}

export default TodoList;