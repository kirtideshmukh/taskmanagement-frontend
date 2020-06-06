import React from "react";
import { Row, Col, Card, CardTitle, CardBody } from "reactstrap";
import TaskList from "./TaskList";
import "./tasks.css";

const TaskLane = (props) => {
  const { taskList } = props;
  console.log({taskList})
  taskList.map((statusWiseTasks, index) => {
    console.log(Object.keys(statusWiseTasks)[0])
    console.log(Object.values(statusWiseTasks)[0])
  })
  return (
    <Row>
      {
        taskList.map((statusWiseTasks, index) => {
          let key = Object.keys(statusWiseTasks)[0];
          let value = Object.values(statusWiseTasks)[0];
        return (
        <Col key={index}>         
         <Card>
            <CardTitle className="lane-title">{key}</CardTitle>
            <CardBody>
              <TaskList tasks={value} />
            </CardBody>
           </Card>
        </Col>
        )
      })
      }  
    </Row>
  )
  // return (
  //   <div>
  //       {
  //         taskList.map((statusWiseTasks, index) => {
  //            return <span>{Object.keys(statusWiseTasks)[0]}</span>
  //         })
  //       }
       
  //     </div>
  // )
}

export default TaskLane;
