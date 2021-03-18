import React from "react";
import BoardImage from '../assets/images/BoardImage';
import TaskBoardList from '../components/global/TaskBoardList/TaskBoardList'

function BoardView() {
  return (
    <div className="boards" style={{
        position: "absolute",
        right: 200,
        bottom: 200
    }}>
        <BoardImage />
        <TaskBoardList/>
    </div>
  );
}

export default BoardView;
