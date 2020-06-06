/** @format */

import { getApi, postApi, patchApi, deleteApi } from "./apiHelpers";
import { API_ENDPOINTS } from "appConstants";

export const getBoardsApi = (kwargs = {}) => getApi(`${API_ENDPOINTS.board}/all`, {});

export const getTaskDetailsApi = (params ={}) => {

  return getApi(`${API_ENDPOINTS.board}/${params.board_id}`,{});
}

export const createTaskApi = (params = {}) =>
  postApi(`${API_ENDPOINTS.board}/${params.board_id}/${API_ENDPOINTS.tasks}`, {});

export const updateTaskApi = (params = {}) => {
  
  return patchApi(`${API_ENDPOINTS.board}/${params.board_id}/${API_ENDPOINTS.tasks}/${params.task_id}`,{});
};

export const archiveTaskApi = (params ={}) => {
 
  return deleteApi(`${API_ENDPOINTS.board}/${params.board_id}/${API_ENDPOINTS.tasks}/${params.task_id}`,{});
}
