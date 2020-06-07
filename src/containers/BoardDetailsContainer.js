import React, { useEffect, Fragment } from  "react";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchBoardDetails,
  searchInitiated
} from "actions/boardActions";
import { toggleModalState, deleteTask, toggleDeleteModalState} from "actions/taskActions"

import TaskLane from "components/Tasks/TaskLane";
import { fetchPriorites, fetchStatusList, fetchLabels } from "../actions/boardActions";
import TaskModal from "../components/Tasks/TaskModal";
import DeleteTaskModal from "../components/Tasks/DeleteTaskModal";
import { Row } from "reactstrap";
import SearchForm from "../components/Search/SearchForm";

const BoardDetailsContainer = (props) => {
  const dispatch = useDispatch(),
    { userId } = useSelector(state => state.appReducer),
    { 
     taskList,
      
      statusList,
      priorities,
      labels =[]
     } = useSelector(state => state.boardDetailsReducer),
     { 
      taskModalState,
      deleteTaskModalState,
      
     } = useSelector(state => state.taskReducer),
    { match : { params: {boardId = null} = {} } ={} } = props;
  
  /**Get list of boards. */
  useEffect(() => {
    dispatch(fetchBoardDetails({user_id:userId, board_id: boardId}))
    dispatch(fetchLabels())
    dispatch(fetchStatusList())
    dispatch(fetchPriorites()) //TODO: resolve saga issue
  }, [userId, boardId, dispatch]);

  
   const toggleDeleteModal = (deletedTaskId) => {
    deleteTaskModalState.isOpen = !deleteTaskModalState.isOpen;
    deleteTaskModalState.taskId = deletedTaskId;
    
    dispatch(toggleDeleteModalState(deleteTaskModalState));
  }

  const toggleModal = (task= {} , lane) =>{
    const { id = null, title ="", priority ="", desc = "", labels = [], due_date =""} = task || {};
    taskModalState.isOpen = !taskModalState.isOpen;
    taskModalState.taskId =  id
    taskModalState.lane = lane;
    taskModalState.title = title;
    taskModalState.priority = priority;
    taskModalState.desc = desc;
    taskModalState.title = title;
    taskModalState.labels = labels;
    taskModalState.due_date = due_date;
    
    dispatch(toggleModalState(taskModalState));
  }

   const callDeleteTask= () => {
    dispatch(deleteTask({task_id: deleteTaskModalState.taskId, board_id: boardId}))
  }

  const callSearchApi =(params) => {
    dispatch(searchInitiated({...params, board_id: boardId}))
  }

  return (
    <Fragment>
      <Row>
        <SearchForm
          priorities={priorities}
          labels={labels}
          callSearchApi={callSearchApi}
       />
      </Row>
     
      <TaskLane taskList={taskList}  toggleModal={toggleModal} toggleDeleteModal={toggleDeleteModal}/>
      
      {
        taskModalState.isOpen && (
          <TaskModal
            statusList={statusList}
            priorities={priorities}
            labels={labels}
            boardId={boardId}
            toggleModal={toggleModal}
            modalState={taskModalState.isOpen}
            lane={taskModalState.lane}
            taskId={taskModalState.taskId}
            taskModalState={taskModalState}
          />
        )
      }
      {
        deleteTaskModalState.isOpen && (
          <DeleteTaskModal
            modalState={deleteTaskModalState.isOpen}
            toggleModal={toggleDeleteModal}
            deleteTask={callDeleteTask}
          />
        )
      }
      
    </Fragment>
    
  ) 
}

export default BoardDetailsContainer;
