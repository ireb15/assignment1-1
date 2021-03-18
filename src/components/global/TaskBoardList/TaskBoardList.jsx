import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd'
import TaskBoardSampleData from './TaskBoardSampleData'
import TaskBoardColumn from './TaskBoardColumn'

const onDragEnd = result => {
    // TODO
}

function TaskBoardList(props) {
    const taskBoardData = TaskBoardSampleData


    return( 
        <DragDropContext onDragEnd={onDragEnd}>
            {taskBoardData.columnOrder.map((columnId) => {
            const column = taskBoardData.columns[columnId];
            const tasks = column.taskIds.map(taskId => taskBoardData.tasks[taskId]);

            return <TaskBoardColumn key={column.id} column={column} tasks={tasks} />;
            })}
        </DragDropContext>
        
    );
}

export default TaskBoardList;