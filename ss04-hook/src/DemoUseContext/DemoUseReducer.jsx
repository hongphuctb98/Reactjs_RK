import React, { useReducer } from "react";

function DemoUseReducer() {
  // khai bao
  const initialState = 0;

  // action
  const ACTION_UP = "up";
  const ACTION_DOWN = "down";
  const ACTION_RANDOM = "random";

  // reducer

  const reducer = (state, action) => {
    switch (action) {
      case ACTION_UP:
        return state + 1;
      case ACTION_DOWN:
        return state - 1;
      case ACTION_RANDOM:
        return Math.floor(Math.random() * 10);
      default:
        break;
    }
  };

  //dispath
  // khai báo giống useState nhưng tham số hứ 2 được ddooirr thành dispatch
  //1. reducer , 2. initialState
  const [count, dispatch] = useReducer(reducer, initialState);
  console.log(dispatch);

  return (
    <div>
      <h2>DEmo useReducer</h2>
      <p>{count}</p>
      <button onClick={() => dispatch(ACTION_UP)}>up</button>
      <button onClick={() => dispatch(ACTION_DOWN)}>down</button>
      <button onClick={() => dispatch(ACTION_RANDOM)}>random</button>
    </div>
  );
}

export default DemoUseReducer;
