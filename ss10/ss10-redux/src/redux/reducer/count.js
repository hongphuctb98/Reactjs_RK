import * as typeAction from "../constant/typeAction";

//b1: khai bao gia trij khoi tao ban dau initialState

const initialState = 0;

//B2 khia bao ham de xu ly logic
const count = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.ACT_UP:
      return (state += action.payload);
    case typeAction.ACT_DOWN:
      return (state -= action.payload);
    case typeAction.ACT_RANDOM:
      return (state = Math.floor(Math.random() * 100 + 1));
    default:
      break;
  }
  return state;
};
export default count;
