const TaskBoardSampleData = {
    tasks: {
        'task1': {id: 'task1', content: '701 Meeting'},
        'task2': {id: 'task2', content: 'Part 4 meeting'},
        'task3': {id: 'task3', content: 'Town'},
    },

    columns: {
        'column1': {
            id: 'column1',
            title: 'To do',
            taskIds: ['task1', 'task2', 'task3'],
        },
    },

    columnOrder: ['column1'],
};

export default TaskBoardSampleData;