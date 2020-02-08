import React, { useState, useEffect } from "react";
import CreateTask from "./CreateTask";
import InputCheckBox from "../../../Components/Input/CheckBox";

import {
  fetchCarTasks,
  createTask,
  updateCarTasks
} from "../../../Services/tasksOperation";

import { Information, Button, FormLayout, TaskList, TaskAction } from "./style";

// import { taskOptions, taskList } from "../../Models";
export const taskOptions = [
  { value: "ADD_DOCUMENT", label: "Add Commnet" },
  { value: "WASH_CAR", label: "Wash Car" },
  { value: "ADD_PAYMENT_DETAILS", label: "Add payment Details" }
];

function CarTask() {
  const [tasks, setTasks] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);

  const addTask = (taskType, comment) => {
    createTask({ taskType, comment });
  };

  useEffect(() => {
    initiateToFetchCarTasks();
  }, []);

  const initiateToFetchCarTasks = async () => {
    const { tasks } = await fetchCarTasks();
    setTasks(tasks);
  };

  const onChangeTask = (id, checkBoxValue) => {
    updateCarTasks(id, checkBoxValue);
  };

  const toggleModal = e => {
    e.preventDefault();
    setModalStatus(!modalStatus);
  };
  // createTask
  return (
    <FormLayout>
      <h4>A List of tasks</h4>
      <div>
        {tasks &&
          tasks.map(({ comment, completed, id, taskType }) => (
            <TaskList key={id}>
              {taskType}: {comment}
              <InputCheckBox
                id={id}
                checked={completed}
                onChange={onChangeTask}
              />
            </TaskList>
          ))}
        {!tasks || (!tasks.length && <div>Opps No task</div>)}
        <TaskAction onClick={toggleModal}>+</TaskAction>
      </div>
      <CreateTask
        modalStatus={modalStatus}
        toggleModal={toggleModal}
        createTask={addTask}
        taskOptions={taskOptions}
      />
    </FormLayout>
  );
}

export default CarTask;
