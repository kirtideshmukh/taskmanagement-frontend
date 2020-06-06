import React from "react";
import { Row, Col, Card, CardTitle, CardBody, UncontrolledTooltip } from "reactstrap";
import TaskList from "./TaskList";
import "./tasks.css";
import { GoDiffAdded } from "react-icons/go"

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
         <Card className="mt-3 mb-3">
            <CardTitle className="lane-title"><strong>{key}</strong> <GoDiffAdded id="add-task-icon"/></CardTitle>
            <CardBody>
              <TaskList tasks={value} />
            </CardBody>
           </Card>
           <UncontrolledTooltip placement="right" target="add-task-icon">
              Add Task
          </UncontrolledTooltip>
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
