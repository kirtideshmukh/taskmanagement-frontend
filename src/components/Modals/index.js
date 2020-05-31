/** @format */

import React from "react";
import PropTypes from "prop-types";
import { Modal, ModalHeader } from "reactstrap";

const getCloseIcon = handleOnClick => (
  <button className="close" onClick={handleOnClick}>
    &times;
  </button>
);

const ModalComponent = props => {
  const {
    className,
    modalState,
    toggleModal,
    modalTitle,
    children,
    size
  } = props;

  return (
    <Modal
      isOpen={modalState}
      toggle={toggleModal}
      className={className}
      size={size}
    >
      <ModalHeader toggle={toggleModal} close={getCloseIcon(toggleModal)}>
        {modalTitle}
      </ModalHeader>
      {children}
    </Modal>
  );
};

ModalComponent.propTypes = {
  className: PropTypes.string,
  modalState: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.func,
    PropTypes.object
  ]),
  size: PropTypes.string
};

export default ModalComponent;
