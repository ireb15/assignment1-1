import React from "react";
import BoardImage from '../assets/images/BoardImage';
import TaskBoardList from '../components/global/TaskBoardList/TaskBoardList'
import TaskBoardSampleData from '../components/global/TaskBoardList/TaskBoardSampleData'

function BoardView() {
  return (
    <div className="boards" style={{
        position: "absolute",
        right: 200,
        bottom: 200
    }}>
        <BoardImage />
        <TaskBoardList taskBoardData={TaskBoardSampleData}/>
    </div>
  );
}

export default BoardView;
