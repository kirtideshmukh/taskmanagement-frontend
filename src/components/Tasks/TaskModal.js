import React, { useEffect, Fragment } from  "react";
import { useSelector, useDispatch } from "react-redux";


import { fetchTaskDetails, createTask, updateTask } from "actions/taskActions";

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
    taskId,
    taskModalState
  } = props;

console.log("******************")
  console.log({props})

  useEffect(() => {
    
    if(taskId){
      dispatch(fetchTaskDetails({task_id: taskId, board_id: boardId}))
    }
    
  }, [taskId, boardId, dispatch]);

  const callCreateTask = (formData = {}) => {
    const { title, description, label, priority, due_date} = formData;
    const params = {
      board_id: boardId,
      status: lane,
      title,
      desc: description,
      label: [label],
      priority,
      due_date
    }
    dispatch(createTask(params))
  }

  const callUpdateTask = (formData = {}) => {
    const { title, description, label, priority, due_date} = formData;
    const params = {
      board_id: boardId,
      status: lane,
      task_id: taskId,
      title,
      desc: description,
      label: [label],
      priority,
      due_date
    }
    dispatch(updateTask(params))
  }

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
          callCreateTask={callCreateTask}
          callUpdateTask={callUpdateTask}
          taskDetails={taskDetails}
          taskModalState={taskModalState}
        />
      
    
      </Modal>
    </div>
  );
}

export default TaskModal;
