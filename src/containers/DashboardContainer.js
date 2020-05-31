import React, { useEffect, Fragment, useState } from  "react";
import { useSelector, useDispatch } from "react-redux";

import BoardList from "../components/Dashboard/BoardList";

import {
  fetchBoardList,
  toggleModalState,
  createBoard
} from "actions/boardActions";
import Loader from "components/shared/Loader";
import { Button } from "reactstrap";
import BoardModal from "../components/Dashboard/BoardModal";
import { getInputFieldValue } from "utils/formHelpers";
import { BTN_LABELS, ERRORS } from "../appConstants";

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
    { boardList, isLoading, boardModalState } = useSelector(state => state.boardReducer),
    [ name, setName ] =  useState(""),
    [ nameError, setNameError] = useState("");

  /**Get list of boards. */
  useEffect(() => {
    // debugger;
    dispatch(fetchBoardList({user_id:userId}))
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
        name: name.trim().toUpperCase(),
        user_id: userId  
      };

    setNameError(nameError);

    if (!nameError) {
      /**When editing a record, call update api
       * Else call create-brand api.
       */
      createBoard(params);
    }
  };

  const toggleModal = (modalState) =>{
    modalState.isOpen = !modalState.isOpen;
    
    dispatch(toggleModalState(modalState));
  }

  if(isLoading) {
    return <Loader />
  }

  return (
    <Fragment>
      <Button onClick={() => toggleModal(boardModalState)}> Add Board </Button>
      <BoardList boardList={boards} />
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
    </Fragment>
    
  ) 
}

export default Dashboard;
