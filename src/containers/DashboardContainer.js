import React, { useEffect, Fragment, useState } from  "react";
import { useSelector, useDispatch } from "react-redux";

import BoardList from "../components/Dashboard/BoardList";

import {
  fetchBoardList,
  toggleModalState,
  createBoard,
  deleteBoard
} from "actions/boardActions";
import Loader from "components/shared/Loader";
import { Button } from "reactstrap";
import BoardModal from "../components/Dashboard/BoardModal";
import { getInputFieldValue } from "utils/formHelpers";
import { BTN_LABELS, ERRORS, USER_ID } from "../appConstants";
import DeleteBoardModal from "components/Dashboard/DeleteBoardModal";

import "../components/Dashboard/dashboard.css";

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
    { boardList, isLoading, boardModalState, deleteBoardModalState } = useSelector(state => state.boardListReducer),
    [ name, setName ] =  useState(""),
    [ nameError, setNameError] = useState("");
  
  /**Get list of boards. */
  useEffect(() => {
    // debugger;
    dispatch(fetchBoardList({user_id:USER_ID}))
  }, [userId, dispatch]);

  const onChangeName = event => {
    setName(getInputFieldValue(event));
  };

  const onBlurName = () => {
    setName(name.trim());
    setNameError(validateName());
  };

  /**Check for the validation of login-id and return the associated error-value */
  const validateName = () => {
    
    return !name.trim() ? ERRORS.required : "";
  };

  const  onSubmit = event => {
    event.preventDefault();

    const nameError = validateName(),
      params = {
        name: name.trim(),
        user_id: userId  
      };

    setNameError(nameError);

    if (!nameError) {
      /**When editing a record, call update api
       * Else call create-brand api.
       */
      dispatch(createBoard(params));
      setName("")
    }
  };

  const toggleDeleteModal = (deletedBoardId) => {
    deleteBoardModalState.isOpen = !deleteBoardModalState.isOpen;
    deleteBoardModalState.boardId = deletedBoardId;
    
    dispatch(toggleModalState(deleteBoardModalState));
  }

  const toggleModal = () =>{
    boardModalState.isOpen = !boardModalState.isOpen;
    
    dispatch(toggleModalState(boardModalState));
  }

  const callDeleteBoard = () => {
    dispatch(deleteBoard({board_id: deleteBoardModalState.boardId, user_id: userId}))
  }

  if(isLoading) {
    return <Loader />
  }
  console.log({boardModalState});

  return (
    <Fragment>
      <Button onClick={() => toggleModal(boardModalState)}> Add Board </Button>
      {/* <BoardList boardList={boardList} toggleModal={toggleDeleteModal} /> */}
      <BoardList boardList={boardList} toggleModal={toggleDeleteModal} />
      {
        boardModalState.isOpen && (
          <BoardModal 
            onBlurName={onBlurName}
            onChangeName={onChangeName}
            modalState={boardModalState.isOpen}
            name={name}
            nameError={nameError}
            toggleModal={toggleModal}
            modalTitle={"Add Board"}
            buttonLabel={BTN_LABELS.save}
            onSubmit={onSubmit}
          />
        )
      }
      {
        deleteBoardModalState.isOpen && (
          <DeleteBoardModal 
            modalState={deleteBoardModalState.isOpen}
            toggleModal={toggleDeleteModal}
            deleteBoard={callDeleteBoard}
          />
        )
      }
    </Fragment>
    
  ) 
}

export default Dashboard;
