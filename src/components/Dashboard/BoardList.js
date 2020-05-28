import React from  "react";
import PropTypes from "prop-types";
import { Row, Col, Card, CardTitle, Button } from "reactstrap";

const BoardList = ({boardList}) => {

  return (
    <Row>
      {
        boardList.map((board, index) => {
          return (
            <Col key={index} sm="3" md="3" lg="3">
              <Card body>
                <CardTitle>{board.name}</CardTitle>
                <Button><i  className="fa fa-trash"/></Button>
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
