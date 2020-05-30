import React, { useEffect, Fragment, useState } from  "react";
import { useSelector, useDispatch } from "react-redux";

import BoardList from "../components/Dashboard/BoardList";

import {
  fetchBoardList,
  toggleModalState
} from "actions/boardActions";
import Loader from "components/shared/Loader";
import { Button } from "reactstrap";
import BoardModal from "../components/Dashboard/BoardModal";
import { getInputFieldValue } from "utils/formHelpers";
import { BTN_LABELS } from "../appConstants";

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
    fetchBoardList(userId)
  }, [userId, dispatch]);

  const onChangeName = event => {
    this.setState({ name: getInputFieldValue(event) });
  };

  const onBlurName = () => {
    const { name } = this.state;

    setName(name.trim());
    setNameError(validateName());

    // this.setState({
    //   name: name.trim(),
    //   errors: {
    //     ...errors,
    //     name: validateName()
    //   }
    // });
  };

  /**Check for the validation of login-id and return the associated error-value */
  const validateName = () => {
    const { errorsMapping } = this.props,
      { name } = this.state;

    return !name.trim() ? errorsMapping.requiredBrandName : "";
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
          />
        )
      }
    </Fragment>
    
  ) 
}

export default Dashboard;
