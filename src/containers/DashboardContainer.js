import React from  "react";
import PropTypes from "prop-types";
import BoardList from "components/Dashboard/BoardList";

const boardList = [{
  id: 1,
  name: "Board 1"
},
{
  id:2,
  name: "Board 2"
},
{
  id:3,
  name: "Board 3"
},
{
  id:4,
  name: "Board 4"
},
{
  id:5,
  name: "Board 5"
},
{
  id:6,
  name: "Board 26"
}
]

const Dashboard = () => {
  return (
    <BoardList boardList={boardList} />
  )
  
}

Dashboard.propTypes = {

}

export default Dashboard;
