import * as types from "../constant/typeList";

export const addProduct = (product) => {
  return {
    type: types.ACT_ADD,
    payload: product,
  };
};

export const delProduct = (id) => {
  return {
    type: types.ACT_DEL,
    payload: id,
  };
};

export const selectProduct = (product) => {
  return {
    type: types.ACT_SELECTED,
    payload: product,
  };
};

export const updateProduct = (product) => {
  return {
    type: types.ACT_UPDATE,
    payload: product,
  };
};
