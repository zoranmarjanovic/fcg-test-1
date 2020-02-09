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
  let taskName = "";

  const addTask = e => {
    e.preventDefault();
    console.log(e.target.taskComment.value);
    console.log(e.target.taskType);
    // createTask(taskName, taskComment);
  };

  const setComment = value => {
    taskName = value;
    console.log(taskName);
  };

  const setTaskComment = () => {};

  return (
    <Modal isShowing={modalStatus} hide={toggleModal}>
      <InputHolder onSubmit={addTask}>
        <h3>Create Task</h3>
        <label>
          <TaskType>Task type</TaskType>
          <InputDropDown
            name="taskType"
            options={taskOptions}
            onChange={setComment}
            placeholder="Select an option"
          />
        </label>
        <label>
          <TaskType>Task comment</TaskType>
          <InputTextArea
            name={"taskComment"}
            placeholder="Enter the comment for task"
            onChange={setTaskComment}
          />
        </label>
        <AddButton>Add</AddButton>
      </InputHolder>
    </Modal>
  );
}

export default CreateCarTask;
