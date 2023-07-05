import * as types from "../constant/typeList";

const initalState = {
  products: [],
  selectedProduct: null,
};

const productReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.ACT_ADD:
      return { ...state, products: [...state.products, action.payload] };
    case types.ACT_DEL:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case types.ACT_SELECTED:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case types.ACT_UPDATE:
      return {
        ...state,
        products: state.products.map((p) =>
          p.id !== action.payload.id ? p : action.payload
        ),
        selectedProduct: null,
      };
  }
  return state;
};

export default productReducer;
