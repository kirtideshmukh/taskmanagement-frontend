import React from  "react";
import { useDispatch } from "react-redux";

import { updateTask } from "actions/taskActions";

import Modal from "components/Modals/index";
import StatusForm from "./StatusForm";

const StatusModal = (props) => {
  const dispatch = useDispatch();
  const {
    toggleModal,
    modalState,
    statusList,
    boardId,
    lane,
    taskId
  } = props;

  const callUpdateTask = (formData = {}) => {
    console.log({formData})
    const params = {
      board_id: boardId,
      status: formData.status,
      task_id: taskId,
      
    }
    dispatch(updateTask(params))
    toggleModal()
  }

  return (
    <div>
      <Modal
        modalState={modalState}
        toggleModal={toggleModal}
        modalTitle="Task Form"
        size="lg"
      >
        <StatusForm  status={lane} statusList={statusList} callUpdateTask={callUpdateTask} toggleModal={toggleModal}/>
    
      </Modal>
    </div>
  );
}

export default StatusModal;
