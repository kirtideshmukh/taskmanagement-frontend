import React, { useEffect, Fragment } from  "react";
import { useSelector, useDispatch } from "react-redux";


import { fetchTaskDetails } from "actions/taskActions";

import Modal from "components/Modals/index";
import FormInput from "components/shared/FormInput/FormInput.js";
import TaskForm from "./TaskForm";

const TaskModal = (props) => {
  const dispatch = useDispatch();
  const { taskDetails} =  useSelector(state => state.taskReducer);
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

  useEffect(() => {
    if(taskId){
      dispatch(fetchTaskDetails({task_id: taskId, board_id: boardId}))
    }
    
  }, [taskId, boardId, dispatch]);

  

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
          lane={lane}
          taskId={taskId}
          boardId={boardId}
        />
      
    
      </Modal>
    </div>
  );
}

export default TaskModal;
