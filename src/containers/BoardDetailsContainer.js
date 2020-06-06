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


const boardDetails = {
  task_status : [
    {
    id: 1,
    name: "To do"
  },
  {
    id: 2,
    name: "In progress"
  },
  {
    id: 3,
    name: "Done"
  }  
  ],
  tasks: [
    {
      id: 1,
      title: "BreakFast",
      status: "To do",
      desc: " task 1",
      creation_date: null,
      update_date: null,
      due_date: null,
      priority: "high",
      label_id: "1",
      is_archived: false,
      board_id: 1
    },
    {
      id: 2,
      title: "Lunc",
      status: "To do",
      desc: " task 2",
      creation_date: null,
      update_date: null,
      due_date: null,
      priority: "high",
      label_id: "2",
      is_archived: false,
      board_id: 1
    },
    {
      id: 3,
      title: "Study",
      status: "In progress",
      desc: " task 3",
      creation_date: null,
      update_date: null,
      due_date: null,
      priority: "high",
      label_id: "4",
      is_archived: false,
      board_id: 1
    },
    {
      id: 4,
      title: "Sleep",
      status: "Done",
      desc: " task 4",
      creation_date: null,
      update_date: null,
      due_date: null,
      priority: "high",
      label_id: "4",
      is_archived: false,
      board_id: 1
    }
  ]
}

// const taskList = getStatusWiseTasks(boardDetails);

// console.log({taskList})

const BoardDetailsContainer = (props) => {
  const dispatch = useDispatch(),
    { userId } = useSelector(state => state.appReducer),
    { boardDetails, 
    isLoading,
     taskList,
      taskModalState,
      deleteTaskModalState,
      statusList,
      priorities,
      labels
     } = useSelector(state => state.boardDetailsReducer),
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

  const toggleModal = ( taskId) =>{
    taskModalState.isOpen = !taskModalState.isOpen;
    taskModalState.taskId = taskId
    
    dispatch(toggleModalState(taskModalState));
  }


  console.log({taskList, statusList, labels, priorities})

  return (
    <Fragment>
      <TaskLane taskList={taskList}  toggleModal={toggleModal} toggleDeleteModal={toggleDeleteModal}/>
      {
        taskModalState.isOpen && (
          <TaskModal
            statusList={statusList}
            priorities={priorities}
            labels={labels}
          />
        )
      }
    </Fragment>
    
  ) 
}

export default BoardDetailsContainer;
