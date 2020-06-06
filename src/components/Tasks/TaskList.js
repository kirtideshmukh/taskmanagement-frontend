import React from "react";
import { ListGroup, ListGroupItem, Col, UncontrolledTooltip } from "reactstrap";
import { MdModeEdit, MdDelete, MdAdd } from "react-icons/md"

const TaskList = ( {tasks}) => {

  console.log({tasks});
  return(
    <ListGroup>
      {
        tasks.map(task => {
          return <ListGroupItem key={task.id} className="task-list">
           
              {task.title}  
              <span className="action-buttons">
                <MdModeEdit  id="edit-task-icon"/>
                <MdDelete id="delete-task-icon" />
              </span>
             
            <UncontrolledTooltip placement="right" target="edit-task-icon">
            Edit Task
          </UncontrolledTooltip>
          <UncontrolledTooltip placement="right" target="delete-task-icon">
            Delete Task
      </UncontrolledTooltip>
            
            </ListGroupItem>
        })
      }
     
    </ListGroup>
  )
}

export default TaskList;
