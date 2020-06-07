import React from "react";
import { ListGroup, ListGroupItem,  UncontrolledTooltip } from "reactstrap";
import { MdModeEdit, MdDelete } from "react-icons/md"
import { FaExchangeAlt} from "react-icons/fa"

const TaskList = ( {tasks, toggleModal, toggleDeleteModal, lane, toggleStatusModal}) => {

  return(
    <ListGroup>
      {
        tasks.map(task => {
          return <ListGroupItem key={task.id} className="task-list">
           
              {task.title}  
              <span className="action-buttons">
                <MdModeEdit  id="edit-task-icon" onClick={() => toggleModal(task,lane )}/>
                <MdDelete id="delete-task-icon" onClick={() => toggleDeleteModal(task.id)} />
                <FaExchangeAlt id="status-task-icon" onClick={() => toggleStatusModal(task.id, lane)} />
              </span>
             
            <UncontrolledTooltip placement="right" target="edit-task-icon">
            Edit Task
          </UncontrolledTooltip>
          <UncontrolledTooltip placement="right" target="delete-task-icon">
            Delete Task
      </UncontrolledTooltip>
      <UncontrolledTooltip placement="right" target="status-task-icon">
          Change Status
      </UncontrolledTooltip>
            
            </ListGroupItem>
        })
      }
     
    </ListGroup>
  )
}

export default TaskList;
