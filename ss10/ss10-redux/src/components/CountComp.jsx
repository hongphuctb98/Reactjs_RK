import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { act_up, act_down, act_random } from "../redux/actions";
function CountComp() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Demo Redux</h2>
      <p>count: {count}</p>
      <button onClick={() => dispatch(act_up(1))}>UP</button>
      <button onClick={() => dispatch(act_down(1))}>DOWN</button>
      <button onClick={() => dispatch(act_random())}>Random</button>
    </div>
  );
}

export default CountComp;
