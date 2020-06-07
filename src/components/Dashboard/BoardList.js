import React from  "react";
import { Row, Col, Card, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa"
import { FcViewDetails } from "react-icons/fc"

const BoardList = ({boardList, toggleModal}) => {

  return (
    <Row>
      {
        boardList.map((board, index) => {
          return (
            <Col key={index} sm="3" md="3" lg="3" className="mt-2 mb-2">
              <Card body className="board-card">
                <CardTitle>{board.name}</CardTitle>
                <Row>
                <Col sm="6" md="6" lg="6">
                 <FaTrash  onClick={() => toggleModal(board.id) }/>
                </Col>
                <Col sm="6" md="6" lg="6">
                  <Link
                    to={{
                      pathname: `/boards/${board.id}`,
                    }}
                    key={index}
                    data-toggle="tooltip"
                    title="Show Board Details"
                  >
                    <FcViewDetails>View Details</FcViewDetails>
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
