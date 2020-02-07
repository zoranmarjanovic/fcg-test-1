import React, { useState, useEffect } from "react";
import InputCheckBox from "../../Components/CheckBox";
import InputDropDown from "../../Components/DropDown";
import Modal from "../../Components/Modal";
import {
  fetchCarTasks,
  createTaskAction,
  updateCarTasks
} from "../../Store/operations/carTasksOperations";
import { useSelector, useDispatch } from "react-redux";

import {
  InformationLayout,
  ImageHolder,
  InformationHolder,
  Information,
  MainHeading
} from "./style";

import { taskOptions, taskList } from "../../Models";

function CarTasks() {
  const [isShowing, setIsShowing] = useState(false);
  const [taskName, setTaskName] = useState(null);
  const [taskCommment, setTaskCommment] = useState("");

  const { carTasks } = useSelector(state => state);
  const dispatch = useDispatch();

  const setTask = e => {
    setTaskName(e.value);
  };

  const setTaskComment = e => {
    setTaskCommment(e.target.value);
  };

  const createTask = () => {
    createTaskAction(
      "",
      { taskType: taskName, comment: taskCommment },
      dispatch
    );
  };

  useEffect(() => {
    fetchCarTasks(dispatch);
  }, []);

  const onChangeTask = (e, id) => {
    updateCarTasks(id, e.target.checked, dispatch);
  };
  const addTask = e => {
    console.log(e);
    console.log(createTaskAction);
  };
  const toggleModel = () => {
    setIsShowing(!isShowing);
  };

  return (
    <>
      <div>
        {carTasks.map(({ comment, completed, id, taskType }) => (
          <div key={id}>
            {taskType}: {comment} :
            <InputCheckBox
              checked={completed}
              onChange={e => {
                onChangeTask(e, id);
              }}
              labelName={"test"}
            />
          </div>
        ))}
        <button onClick={toggleModel}>Show modal</button>
      </div>
      <Modal isShowing={isShowing} hide={toggleModel}>
        <div>
          Modal
          <label>
            Task type
            <InputDropDown
              options={taskOptions}
              onChange={setTask}
              placeholder="Select an option"
            />
          </label>
          <label>
            Task comment
            <input type="text" onChange={setTaskComment} />
          </label>
          <button onClick={createTask}>Add</button>
        </div>
      </Modal>
    </>
  );
}

export default CarTasks;
