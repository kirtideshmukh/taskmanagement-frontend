import React from "react";
import { ListGroup, ListGroupItem,  UncontrolledTooltip } from "reactstrap";
import { MdModeEdit, MdDelete } from "react-icons/md"

const TaskList = ( {tasks, toggleModal, toggleDeleteModal, lane}) => {

  return(
    <ListGroup>
      {
        tasks.map(task => {
          return <ListGroupItem key={task.id} className="task-list">
           
              {task.title}  
              <span className="action-buttons">
                <MdModeEdit  id="edit-task-icon" onClick={() => toggleModal(task,lane )}/>
                <MdDelete id="delete-task-icon" onClick={() => toggleDeleteModal(task.id)} />
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
