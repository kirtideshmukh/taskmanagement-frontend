import React from "react";
import ConfirmationModal from "components/Modals/ConfirmationModal";
import { BTN_LABELS } from "appConstants";

const DeleteBoardModal = ( props ) => {

  const { toggleModal, modalState, deleteBoard } = props;

  return (
    <ConfirmationModal 
    toggleModal={toggleModal}
    modalState={modalState}
    modalTitle={"Delete Board"}
    handleOnClick={deleteBoard}
    confirmationMessage="Are you sure that you want to delete this board?"
    buttonTitle={BTN_LABELS.delete}
    buttonColor="danger"
    />
  )
}

export default DeleteBoardModal;
