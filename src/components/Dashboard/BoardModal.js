/** @format */

import React from "react";
import { ModalBody, ModalFooter, Form, Input, Button } from "reactstrap";
import PropTypes from "prop-types";

import Modal from "components/Modals/index";
import FormInput from "components/shared/FormInput/FormInput.js";
import ServerErrorOnForm from "components/shared/ServerErrors/ServerErrorsOnForm";
import FormLoader from "components/shared/Loader";

const BoardModal = props => {
  const {
    buttonLabel,
    onBlurName,
    onChangeName,
    name,
    onSubmit,
    isSubmitting,
    serverErrors,
    toggleModal,
    modalState,
    modalTitle,
    nameError
  } = props;

  return (
    <div>
      <Modal
        modalState={modalState}
        toggleModal={toggleModal}
        modalTitle={modalTitle}
      >
        <Form onSubmit={onSubmit}>
          <ServerErrorOnForm messages={serverErrors} />
          <ModalBody>
            <FormInput
              type="text"
              name="brand-name"
              placeholder="Enter Board name *"
              value={name}
              handleOnBlur={onBlurName}
              handleOnChange={onChangeName}
              errorMsg={nameError}
            />
          </ModalBody>
          <ModalFooter>
            <Input
              type="submit"
              value={buttonLabel}
              className="submit-btn modal-submit-btn"
            />
            <Button color="secondary" onClick={toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
          <FormLoader isLoading={isSubmitting} />
        </Form>
      </Modal>
    </div>
  );
};

BoardModal.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onBlurName: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string
  }),
  onSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  serverErrors: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleModal: PropTypes.func.isRequired,
  modalState: PropTypes.bool.isRequired,
  modalTitle: PropTypes.string.isRequired
};

export default BoardModal;
