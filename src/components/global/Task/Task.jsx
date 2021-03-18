import React, { useState } from "react";
import { Draggable } from 'react-beautiful-dnd';
import RightChevron from "../../../assets/icons/RightChevron";
import Subtask from "./Subtask";

function Task(props) {
  const { name, checked, subtasks, index } = props;

  const [isChecked, setIsChecked] = useState(checked);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCheckBoxClick = () => setIsChecked(!isChecked);
  const handleIconClick = () => setIsExpanded(!isExpanded);

  return (
    <Draggable key={props.name} draggableId={props.name} index={props.index}>
      {provided => (
        <div className={"task-container" + (isExpanded ? "--expanded" : "")}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={provided.innerRef}
          ref={provided.innerRef}
        >
          <div className="task-header-container">
            <div
              className={"task-checkbox" + (isChecked ? "--checked" : "")}
              onClick={handleCheckBoxClick}
            />
            <span className={"task-title" + (isChecked ? "--checked" : "")}>
              {name}
            </span>
            <RightChevron handleOnClick={handleIconClick} isRotated={isExpanded} />
          </div>
    
          {/* <div
            className={"task-details-container" + (isExpanded ? "--expanded" : "")}
          >
            <div className="subtask-list-container">
              {subtasks.map((subtask) => (
                <Subtask key={subtask.id} name={subtask.name} checked={subtask.checked} />
              ))}
            </div>
          </div> */}
        </div>
      )}
    </Draggable>
  );
}
export default Task;
