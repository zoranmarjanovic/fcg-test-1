import React, { useState } from "react";

import InputDropDown from "../../../Components/Form/DropDown";
import Required from "../../../Components/Required";
import InputText from "../../../Components/Form/Text";
import Modal from "../../../Components/Modal";
import { TASK_OPTIONS } from "./constants";
import { InputHolder, TaskType, AddButton, ActionHolder, Error } from "./style";

function CreateCarTask({ modalStatus, toggleModal, createTask, loading }) {
  const [taskType, setTaskType] = useState(null);
  const [error, setError] = useState(null);
  const addTask = e => {
    e.preventDefault();
    const { comment, taskType } = e.target;

    if (!comment || !comment.value || !taskType || !taskType.value) {
      setError("Please fill required data");
      return;
    }
    setError(null);
    createTask({ taskType: taskType.value, comment: comment.value });
  };

  const onChangeHandler = ({ value, label }) => {
    setTaskType({ label, value });
  };

  return (
    <Modal data-testid="createModal" isShowing={modalStatus} hide={toggleModal}>
      <InputHolder onSubmit={addTask}>
        <h3>Create Task</h3>
        <label>
          <TaskType>
            Task type <Required />
          </TaskType>
          <InputDropDown
            name="taskType"
            value={taskType}
            onChange={onChangeHandler}
            options={TASK_OPTIONS}
            placeholder="Select an option"
          />
        </label>
        <label>
          <TaskType>
            Task comment <Required />
          </TaskType>
          <InputText
            name={"comment"}
            placeholder="Enter the comment for task"
          />
        </label>
        <ActionHolder>
          <Error>{error}</Error>
          <AddButton primary={loading}>Add</AddButton>
        </ActionHolder>
      </InputHolder>
    </Modal>
  );
}

export default CreateCarTask;
