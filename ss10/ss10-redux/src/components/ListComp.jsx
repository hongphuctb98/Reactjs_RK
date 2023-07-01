import React from "react";
import { act_random_arr } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
function ListComp() {
  //lay du lieu ve
  const list = useSelector((state) => state.list);

  //gui action len store
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Random List</h2>
      <p>{list.toString()}</p>
      <button onClick={() => dispatch(act_random_arr())}>Random</button>
    </div>
  );
}

export default ListComp;
