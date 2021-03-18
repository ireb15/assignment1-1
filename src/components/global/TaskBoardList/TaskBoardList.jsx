import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd'
import TaskBoardSampleData from './TaskBoardSampleData'
import TaskBoardColumn from './TaskBoardColumn'

// const taskBoardData = TaskBoardSampleData



function TaskBoardList(props) {
    const { taskBoardData } = props;
    
    const [boardData, setBoardData] = useState(taskBoardData);

    const onDragEnd = result => {
        const { destination, source, draggableId } = result;
    
        if (!destination) {
            return;
        }
    
        // If it's dropped in the same place do nothing
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }
    
        const column = boardData.columns[source.droppableId];

        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);
        
        const newColumn = {
            ...column,
            taskIds: newTaskIds,
        };
    
        console.log(column)
        console.log(newColumn)

        const newBoardData = boardData

        newBoardData.columns[source.droppableId] = newColumn;
    
        setBoardData({...newBoardData})
        console.log("Board data set")
        console.log(newColumn.taskIds)
    }

    return( 
        <DragDropContext onDragEnd={onDragEnd}>
            {boardData.columnOrder.map((columnId) => {
            const column = boardData.columns[columnId];
            const tasks = column.taskIds.map(taskId => boardData.tasks[taskId]);

            return <TaskBoardColumn key={column.id} column={column} tasks={tasks} />;
            })}
        </DragDropContext>
    );
}

export default TaskBoardList;