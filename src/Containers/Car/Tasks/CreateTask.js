import React, { useState } from "react";

import InputDropDown from "../../../Components/Input/DropDown";
import InputTextArea from "../../../Components/Input/TextArea";
import Modal from "../../../Components/Modal";

import { InputHolder, TaskType, AddButton } from "./style";

export const taskOptions = [
  { value: "ADD_DOCUMENT", label: "Add Commnet" },
  { value: "WASH_CAR", label: "Wash Car" },
  { value: "ADD_PAYMENT_DETAILS", label: "Add payment Details" }
];

function CreateCarTask({ modalStatus, toggleModal, createTask }) {
  const addTask = e => {
    e.preventDefault();
    const { comment, taskType } = e.target;
    if (!comment || !taskType) {
      return;
    }
    createTask({ taskType: taskType.value, comment: comment.value });
  };

  return (
    <Modal isShowing={modalStatus} hide={toggleModal}>
      <InputHolder onSubmit={addTask}>
        <h3>Create Task</h3>
        <label>
          <TaskType>Task type</TaskType>
          <InputDropDown
            name="taskType"
            options={taskOptions}
            placeholder="Select an option"
          />
        </label>
        <label>
          <TaskType>Task comment</TaskType>
          <InputTextArea
            name={"comment"}
            placeholder="Enter the comment for task"
          />
        </label>
        <AddButton>Add</AddButton>
      </InputHolder>
    </Modal>
  );
}

export default CreateCarTask;
