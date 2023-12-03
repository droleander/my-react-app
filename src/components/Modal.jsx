/* eslint-disable react/prop-types */

import { useState } from "react";

function Modal({ employee, handleDelete }) {
  
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState(null);
  
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    btnClicked === "REMOVE" && handleDelete(employee.idx);
  };
  
  const handleButtonClick = (title, content, button) => {
    setModalTitle(title);
    setModalContent(content);
    setBtnClicked(button);
    handleShow();
  };
  
  const [btnClicked, setBtnClicked] = useState(null);
  
  const detailsTitle = <div>Employee Details</div>;
  const detailsContent =
    <p>
      <b>NAME:</b> {employee.name || "NAME"} <br />
      <b>JOB:</b> {employee.job || "POSITION"} <br />
      <b>ID:</b> {employee.idx.slice(0, 8) || "XXXXXXXX"} <br />
      <b>HOBBIES:</b> {employee.hobbies || "HOBBIES"} <br />
    </p>;
  const removeTitle = <div>Remove Employee</div>;
  const removeContent =
    <p>
      <b>{employee.name.toUpperCase() || "NAME"}</b>... so long, farewell, auf Wiedersehen, byeee!
    </p>;
  
  return (
    <>
      {/* <!-- "DETAILS" button that will trigger modal --> */}
      <button
        className="btn btn-warning border-0 rounded-pill text-uppercase mx-auto"
        onClick={() => handleButtonClick(detailsTitle, detailsContent, "DETAILS")}>
        Details
      </button>
      
      {/* <!-- "REMOVE" button that will trigger modal --> */}
      <button
        className="btn btn-warning border-0 rounded-pill text-uppercase mx-auto"
        onClick={() => handleButtonClick(removeTitle, removeContent, "REMOVE")}>
        Remove
      </button>

      {/* <!-- Modal triggered by "DETAILS" and "REMOVE" buttons --> */}
      {show && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content border-2 border-primary bg-light rounded-5 text-dark pb-2">
              <div className="modal-header border-2 border-primary border-opacity-25">
                <h1 className="modal-title h3">{modalTitle}</h1>
                <button
                  type="button"
                  className="btn-close fs-3"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => handleClose()}>
                </button>
              </div>
              <div className="modal-body pb-0">{modalContent}</div>
              <div className="modal-footer border-2 border-primary border-opacity-25">
                <p className="m-auto">&copy; {new Date().getFullYear()}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal