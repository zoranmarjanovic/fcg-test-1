import React, { useState, useEffect } from "react";
import CreateCarTask from "./createCarTask";
import InputCheckBox from "../../../Components/Form/CheckBox";
import { PaperClip, CarWash, Payment } from "../../../Components/Icons";
import Paper from "../../../Components/PaperLayout";
import FormLayout from "../../../Components/Form/FormLayout";
import { TASK_OPTIONS } from "./constants";
import {
  fetchCarTasks,
  createTask,
  updateCarTasks
} from "../../../Services/tasksOperation";

import { TaskIconHolder, TaskList, TaskAction, TaskHolder } from "./style";

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

function CarTask({ task }) {
  const [tasks, setTasks] = useState(task);
  const [modalStatus, setModalStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  const createTaskHandler = async taskType => {
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
    <Paper title={"A List of tasks"}>
      <FormLayout>
        <TaskHolder>
          <div data-testid="taskListRender">
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
          </div>
          {!tasks || (!tasks.length && <div>Opps No task</div>)}
          <TaskAction data-testid="taskModal" onClick={toggleModal}>
            +
          </TaskAction>
        </TaskHolder>
        <CreateCarTask
          modalStatus={modalStatus}
          toggleModal={toggleModal}
          createTask={createTaskHandler}
          loading={loading}
          taskOptions={TASK_OPTIONS}
        />
      </FormLayout>
    </Paper>
  );
}

export default CarTask;
