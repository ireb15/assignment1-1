import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from '../Task/Task';

function TaskBoardColumn(props) {
    return(
        <div className="task-board-column">
            <h2>{props.column.title}</h2>
            <Droppable droppableId={props.column.title}>
                {provided => (
                    <div
                        innerRef={provided.innerRef}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {props.tasks.map((task, index) => <Task name={task.id} index={index}/>)}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
}

export default TaskBoardColumn