import * as typeAction from "../constant/typeAction";

const initState = [5, 10, 15, 20];

const list = (state = initState, action) => {
  switch (action.type) {
    case typeAction.ACT_RANDOM_ARR:
      return (state = [...state, Math.floor(Math.random() * 100 + 1)]);
    default:
      return state;
  }
};

export default list;
