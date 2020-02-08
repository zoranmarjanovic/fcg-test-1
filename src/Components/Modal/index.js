import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

export const useModal = (defaultValue = false) => {
  // presentation layer can have UI state but no data state
  const [showModal, setIsShowing] = useState(defaultValue);

  function toggleModal() {
    setIsShowing(!showModal);
  }

  return {
    showModal,
    toggleModal
  };
};

export const Modal = ({ isShowing, hide, children }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {children}
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;
