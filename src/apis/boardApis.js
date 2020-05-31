/** @format */

import { getApi, postApi, patchApi } from "./apiHelpers";
import { API_ENDPOINTS } from "appConstants";

export const getBoardsApi = (kwargs = {}) => getApi(`${API_ENDPOINTS.board}/all`, kwargs);

export const createBoardApi = (kwargs = {}) =>
  postApi(API_ENDPOINTS.board, kwargs);

export const updateBoardApi = (params = {}) => {
  const { brand, id } = params,
    kwargs = {
      brand: brand
    };

  return patchApi(`${API_ENDPOINTS.board}/${id}`, kwargs);
};
