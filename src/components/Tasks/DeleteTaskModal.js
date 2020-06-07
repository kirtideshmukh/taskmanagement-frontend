import React from "react";
import ConfirmationModal from "components/Modals/ConfirmationModal";
import { BTN_LABELS } from "appConstants";

const DeleteTaskModal = ( props ) => {

  const { toggleModal, modalState, deleteTask } = props;

  return (
    <ConfirmationModal 
    toggleModal={toggleModal}
    modalState={modalState}
    modalTitle={"Delete Task"}
    handleOnClick={deleteTask}
    confirmationMessage="Are you sure that you want to delete this task?"
    buttonTitle={BTN_LABELS.delete}
    buttonColor="danger"
    />
  )
}

export default DeleteTaskModal;
