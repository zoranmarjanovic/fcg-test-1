import React, { useState, useEffect } from "react";
import CreateTask from "./createTask";
import InputCheckBox from "../../../Components/Input/CheckBox";
import { PaperClip, CarWash, Payment } from "../../../Components/Icons";
import { TASK_OPTIONS } from "./constants";
import {
  fetchCarTasks,
  createTask,
  updateCarTasks
} from "../../../Services/tasksOperation";

import { TaskIconHolder, FormLayout, TaskList, TaskAction } from "./style";

const TaskIcons = ({ iconName }) => {
  if (iconName === "ADD_DOCUMENT") {
    return <PaperClip />;
  } else if (iconName === "WASH_CAR") {
    return <CarWash />;
  } else if (iconName === "ADD_PAYMENT_DETAILS") {
    return <Payment />;
  }
  return null;
};

function CarTask() {
  const [tasks, setTasks] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  const addTask = async taskType => {
    setLoading(true);
    const response = await createTask(taskType);
    if (response) {
      // We can set as locally instead of calling the API
      initiateToFetchCarTasks();
      toggleModal();
    }
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
    if (e) {
      e.preventDefault();
    }
    setModalStatus(!modalStatus);
    setLoading(false);
  };

  return (
    <FormLayout>
      <h4>A List of tasks</h4>
      <div>
        {tasks &&
          tasks.map(({ comment, completed, id, taskType }) => (
            <TaskList key={id}>
              <div>
                <TaskIconHolder>
                  <TaskIcons iconName={taskType} />
                </TaskIconHolder>
                <span>{comment}</span>
              </div>
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
        loading={loading}
        taskOptions={TASK_OPTIONS}
      />
    </FormLayout>
  );
}

export default CarTask;
