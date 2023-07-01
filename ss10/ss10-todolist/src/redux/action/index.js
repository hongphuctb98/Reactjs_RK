import * as types from "../constant/typeAction";

export const act_add = (value) => {
  return {
    type: types.ACT_ADD,
    payload: value,
  };
};

export const act_del = (id) => {
  return {
    type: types.ACT_DEL,
    payload: id,
  };
};

export const act_selected = (todo) => {
  return {
    type: types.ACT_SELECTED,
    payload: todo,
  };
};

export const act_update = (todo) => {
  return {
    type: types.ACT_UPDATE,
    payload: todo,
  };
};
