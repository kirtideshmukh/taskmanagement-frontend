import React from "react";
import { ListGroup, ListGroupItem, Col } from "reactstrap";
import { MdModeEdit, MdDelete } from "react-icons/md"

const TaskList = ( {tasks}) => {

  console.log({tasks});
  return(
    <ListGroup>
      {
        tasks.map(task => {
          return <ListGroupItem key={task.id} className="task-list">
           
              {task.title}
              <span className="action-buttons">
                <MdModeEdit />
                <MdDelete />
              </span>
             

            
            </ListGroupItem>
        })
      }
     
    </ListGroup>
  )
}

export default TaskList;
