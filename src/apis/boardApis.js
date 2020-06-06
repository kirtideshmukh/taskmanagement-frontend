/** @format */

import { getApi, postApi, patchApi, deleteApi } from "./apiHelpers";
import { API_ENDPOINTS } from "appConstants";
import { USER_ID } from "../appConstants";

export const getBoardsApi = (kwargs = {}) => getApi(`${API_ENDPOINTS.board}/all`, {});

export const getBoardDetailsApi = (params ={}) => {
  const kwargs = {
    user_id: params.user_id
  }

  return getApi(`${API_ENDPOINTS.board}/${params.board_id}`,{});
}

export const createBoardApi = (kwargs = {}) =>
  postApi(`${API_ENDPOINTS.board}/`, kwargs);

export const updateBoardApi = (params = {}) => {
  const { brand, id } = params,
    kwargs = {
      brand: brand
    };

  return patchApi(`${API_ENDPOINTS.board}/${id}`, kwargs);
};

export const deleteBoardApi = (params ={}) => {
  const kwargs = {
    user_id: params.user_id
  }

  return deleteApi(`${API_ENDPOINTS.board}/${params.board_id}`, kwargs);
}
