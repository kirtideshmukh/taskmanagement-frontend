import React, { useEffect, Fragment } from  "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import BoardList from "../components/Dashboard/BoardList";

import {
  fetchBoardList
} from "actions/boardActions";
import Loader from "components/shared/Loader/Loader";
import { Button } from "reactstrap";

const boards = [{
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
  const dispatch = useDispatch(),
    { userId } = useSelector(state => state.appReducer),
    { boardList, isLoading } = useSelector(state => state.boardReducer);

  /**Get list of boards. */
  useEffect(() => {
    fetchBoardList(userId)
  }, [userId, dispatch]);

  if(isLoading) {
    return <Loader />
  }

  return (
    <Fragment>
      <Button> Add Board </Button>
      <BoardList boardList={boards} />
    </Fragment>
    
  ) 
}

Dashboard.propTypes = {

}

export default Dashboard;
