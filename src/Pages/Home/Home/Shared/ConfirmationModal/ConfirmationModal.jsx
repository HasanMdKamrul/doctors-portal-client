import React from "react";

const ConfirmationModal = ({
  cancelText,
  actionText,
  title,
  message,
  cancelHandler,
  deleteHandler,
  modalData,
}) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => deleteHandler(modalData)}
              htmlFor="confirmation-modal"
              className="btn"
            >
              {actionText}
            </label>
            <label
              onClick={cancelHandler}
              htmlFor="confirmation-modal"
              className="btn"
            >
              {cancelText}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
