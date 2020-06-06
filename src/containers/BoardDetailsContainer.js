import React, { useEffect, Fragment } from  "react";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchBoardDetails,
} from "actions/boardActions";
import { toggleModalState} from "actions/taskActions"
import Loader from "components/shared/Loader";

import { getStatusWiseTasks } from "reducers/boardDetailsReducer";
import TaskLane from "components/Tasks/TaskLane";
import { fetchPriorites, fetchStatusList, fetchLabels } from "../actions/boardActions";
import TaskModal from "../components/Tasks/TaskModal";

const BoardDetailsContainer = (props) => {
  const dispatch = useDispatch(),
    { userId } = useSelector(state => state.appReducer),
    { boardDetails, 
    isLoading,
     taskList,
      
      statusList,
      priorities,
      labels
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
    // dispatch(fetchPriorites()) //TODO: resolve saga issue
  }, [userId, boardId, dispatch]);

  
   const toggleDeleteModal = (deletedTaskId) => {
    deleteTaskModalState.isOpen = !deleteTaskModalState.isOpen;
    deleteTaskModalState.taskId = deletedTaskId;
    
    dispatch(toggleModalState(deleteTaskModalState));
  }

  const toggleModal = ( taskId =null, lane = null) =>{
    taskModalState.isOpen = !taskModalState.isOpen;
    taskModalState.taskId =  taskModalState.isOpen ? null : taskId
    taskModalState.lane = lane
    
    dispatch(toggleModalState(taskModalState));
  }

  return (
    <Fragment>
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
          />
        )
      }
    </Fragment>
    
  ) 
}

export default BoardDetailsContainer;
