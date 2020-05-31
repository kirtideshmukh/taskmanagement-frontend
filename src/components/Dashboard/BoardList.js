import React from  "react";
import { Row, Col, Card, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";

const BoardList = ({boardList, toggleModal}) => {

  return (
    <Row>
      {
        boardList.map((board, index) => {
          return (
            <Col key={index} sm="3" md="3" lg="3">
              <Card body>
                <CardTitle>{board.name}</CardTitle>
                <Row>
                <Col sm="6" md="6" lg="6">
                  <Button onClick={() => toggleModal(board.id) }><i  className="fa fa-trash"/> Delete</Button>
                </Col>
                <Col sm="6" md="6" lg="6">
                  <Link
                    to={{
                      pathname: `/boards/${board.id}`,
                    }}
                    key={index}
                    // data-toggle="tooltip"
                    // title="Show Models"
                  >
                    See details
                    {/* <FaListUl /> */}
                  </Link>
                </Col>
                </Row>
                
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
