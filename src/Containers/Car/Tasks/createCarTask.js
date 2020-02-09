import React, { useState } from "react";

import InputDropDown from "../../../Components/Form/DropDown";
import InputText from "../../../Components/Form/Text";
import Modal from "../../../Components/Modal";
import { TASK_OPTIONS } from "./constants";
import { InputHolder, TaskType, AddButton } from "./style";

function CreateCarTask({ modalStatus, toggleModal, createTask, loading }) {
  const [taskType, setTaskType] = useState(null);
  const addTask = e => {
    e.preventDefault();
    const { comment, taskType } = e.target;
    if (!comment || !taskType) {
      return;
    }
    createTask({ taskType: taskType.value, comment: comment.value });
  };

  const onChangeHandler = ({ value, label }) => {
    setTaskType({ label, value });
  };

  return (
    <Modal isShowing={modalStatus} hide={toggleModal}>
      <InputHolder onSubmit={addTask}>
        <h3>Create Task</h3>
        <label>
          <TaskType>Task type</TaskType>
          <InputDropDown
            name="taskType"
            value={taskType}
            onChange={onChangeHandler}
            options={TASK_OPTIONS}
            placeholder="Select an option"
          />
        </label>
        <label>
          <TaskType>Task comment</TaskType>
          <InputText
            name={"comment"}
            placeholder="Enter the comment for task"
          />
        </label>
        <AddButton primary={loading}>Add</AddButton>
      </InputHolder>
    </Modal>
  );
}

export default CreateCarTask;
