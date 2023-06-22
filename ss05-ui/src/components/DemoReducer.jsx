import React, { useReducer, useRef } from "react";

const initState = {
  job: "",
  jobs: [],
};

//action

const SET_JOB = "SET_JOB";
const ADD_JOB = "ADD_JOB";
const DELETE_JOB = "DELETE_JOB";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

//reducer

const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case DELETE_JOB:
      let newJob = [...state.jobs];
      newJob.splice(action.payload, 1);
      return {
        ...state,
        jobs: newJob,
      };
    default:
      break;
  }
};

//dispatch

function DemoReducer() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const inputRef = useRef();
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };
  return (
    <div>
      <h3>todo</h3>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter todo ...."
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, i) => (
          <li key={i}>
            {job} <span onClick={() => dispatch(deleteJob(i))}> &times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DemoReducer;
