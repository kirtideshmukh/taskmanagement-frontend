import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const TaskList = ( {tasks}) => {

  console.log({tasks});
  return(
    <ListGroup>
      {
        tasks.map(task => {
          return <ListGroupItem key={task.id}>{task.title}</ListGroupItem>
        })
      }
     
    </ListGroup>
  )
}

export default TaskList;
