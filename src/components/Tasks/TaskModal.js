import React from "react";
import { ModalBody, ModalFooter, Form, Input } from "reactstrap";
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Modal from "components/Modals/index";
import FormInput from "components/shared/FormInput/FormInput.js";
import TaskForm from "./TaskForm";

const TaskModal = (props) => {

  const {
    toggleModal,
    modalState,
    labels,
    statusList,
    priorities,
    boardId,
    lane,
    taskId
  } = props;

  return (
    <div>
      <Modal
        modalState={modalState}
        toggleModal={toggleModal}
        modalTitle="Task Form"
        size="lg"
      >
        <TaskForm
          labels={labels}
          statusList={statusList}
          priorities={priorities}
          toggleModal={toggleModal}
        />
      
    
      </Modal>
    </div>
  );
}

export default TaskModal;
