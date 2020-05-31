import React from  "react";
import { Row, Col, Card, CardTitle, Button } from "reactstrap";

const BoardList = ({boardList, toggleModal}) => {

  return (
    <Row>
      {
        boardList.map((board, index) => {
          return (
            <Col key={index} sm="3" md="3" lg="3">
              <Card body>
                <CardTitle>{board.name}</CardTitle>
                <Button onClick={() => toggleModal(board.id) }><i  className="fa fa-trash"/> Delete</Button>
              </Card>
            </Col>
          )    
        })
      }   
    </Row>
  )
}

BoardList.propTypes = {

}

export default BoardList;
