/** @format */

import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import PropTypes from "prop-types";

import ServerErrorOnForm from "components/ServerErrorsOnForm";
import FormLoader from "components/Loader/Loader";

const getCloseIcon = handleOnClick => (
  <button className="close" onClick={handleOnClick}>
    &times;
  </button>
);
const ConfirmationModal = props => {
  const {
    toggleModal,
    modalState,
    modalTitle,
    handleOnClick,
    confirmationMessage,
    buttonTitle,
    modalErrors,
    isLoading,
    buttonColor
  } = props;

  return (
    <div>
      <Modal isOpen={modalState} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal} close={getCloseIcon(toggleModal)}>
          {modalTitle}
          <ServerErrorOnForm messages={modalErrors} />
        </ModalHeader>
        <ModalBody>
          <span>{confirmationMessage}</span>
        </ModalBody>
        <ModalFooter>
          <Button
            color={buttonColor ? buttonColor : "primary"}
            onClick={handleOnClick}
          >
            {buttonTitle}
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
        <FormLoader isLoading={isLoading} />
      </Modal>
    </div>
  );
};

ConfirmationModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  modalState: PropTypes.bool.isRequired,
  modalTitle: PropTypes.string,
  handleOnClick: PropTypes.func,
  confirmationMessage: PropTypes.string,
  buttonTitle: PropTypes.string,
  modalErrors: PropTypes.arrayOf(PropTypes.string),
  isLoading: PropTypes.bool,
  buttonColor: PropTypes.string
};

export default ConfirmationModal;
