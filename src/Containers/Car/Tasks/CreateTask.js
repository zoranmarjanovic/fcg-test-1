import React, { useState } from "react";

import InputDropDown from "../../../Components/Input/DropDown";
import Modal from "../../../Components/Modal";

import { Information, Button, FormLayout } from "./style";

export const taskOptions = [
  { value: "ADD_DOCUMENT", label: "Add Commnet" },
  { value: "WASH_CAR", label: "Wash Car" },
  { value: "ADD_PAYMENT_DETAILS", label: "Add payment Details" }
];

function CreateCarTask({ modalStatus, toggleModal, createTask }) {
  const [taskComment, setTaskComment] = useState("");
  const [taskName, setTaskName] = useState(null);

  const addTask = e => {
    if (!taskComment && !taskComment) {
      return;
    }
    createTask(taskName, taskComment);
  };

  return (
    <Modal isShowing={modalStatus} hide={toggleModal}>
      <div>
        Modal
        <label>
          Task type
          <InputDropDown
            options={taskOptions}
            onChange={e => {
              setTaskName(e.value);
            }}
            placeholder="Select an option"
          />
        </label>
        <label>
          Task comment
          <input
            type="text"
            onChange={e => {
              setTaskComment(e.target.value);
            }}
          />
        </label>
        <button onClick={addTask}>Add</button>
      </div>
    </Modal>
  );
}

export default CreateCarTask;
