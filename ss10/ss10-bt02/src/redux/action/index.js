import * as types from "../constant/bt03Types";

export const act_add = (todo) => {
  return {
    type: types.ACT_ADD,
    payload: todo,
  };
};

export const act_del = (id) => {
  return {
    type: types.ACT_DELETE,
    payload: id,
  };
};

export const act_selected = (todo) => {
  return {
    type: types.ACT_SELECTED,
    payload: todo,
  };
};

export const act_upload = (todo) => {
  return {
    type: types.ACT_UPLOAD,
    payload: todo,
  };
};

export const act_search = (text) => {
  return {
    type: types.ACT_SEARCH,
    payload: text,
  };
};
