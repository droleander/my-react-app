/* eslint-disable react/prop-types */

import { useState } from "react";

function Modal({ employee, handleDelete }) {
  
  const [modalHeading, setModalHeading] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [btnClicked, setBtnClicked] = useState(null);
  
  const handleButtonClick = (heading, content, button) => {
    setModalHeading(heading);
    setModalContent(content);
    setBtnClicked(button);
  };
  
  const detailsHeading = "Employee Details";
  const detailsContent = (
    <>
      <b>NAME:</b> {employee.name || "NAME"} <br />
      <b>JOB:</b> {employee.job || "POSITION"} <br />
      <b>ID:</b> {employee.idx.slice(0, 8) || "XXXXXXXX"} <br />
      <b>HOBBIES:</b> {employee.hobbies || "HOBBIES"} <br />
    </>
  );
  
  const removeHeading = "Remove Employee";
  const removeContent = (
    <>
      <b>{employee.name || "NAME"}</b>... so long, farewell, auf Wiedersehen, byeee!
    </>
  );
  
  return (
    <>
      {/* <!-- "DETAILS" button triggers alertModal --> */}
      <button
        className="btn btn-warning border-0 rounded-pill text-uppercase mx-auto"
        data-bs-toggle="modal"
        data-bs-target={"#alertModal" + employee.idx}
        onClick={() => handleButtonClick(detailsHeading, detailsContent, "DETAILS")}>
        Details
      </button>
      
      {/* <!-- "REMOVE" button triggers alertModal --> */}
      <button
        className="btn btn-warning border-0 rounded-pill text-uppercase mx-auto"
        data-bs-toggle="modal"
        data-bs-target={"#alertModal" + employee.idx}
        onClick={() => handleButtonClick(removeHeading, removeContent, "REMOVE")}>
        Remove
      </button>

      {/* <!-- alertModal triggered by "DETAILS" and "REMOVE" buttons --> */}
      <div className="modal fade" id={"alertModal" + employee.idx} data-bs-backdrop="static" tabIndex="-1" aria-labelledby="alertModalLabel" aria-hidden="true" >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-5 text-dark">
            <div className="modal-header">
              <h1 className="modal-title h3" id="alertModalLabel">{modalHeading}</h1>
            </div>
            <div className="modal-body">{modalContent}</div>
            <div className="modal-footer">
              <p className="me-auto">&copy; {new Date().getFullYear()}</p>
              <button
                type="button"
                className="btn btn-warning border-0 rounded-pill text-uppercase"
                data-bs-dismiss="modal"
                onClick={() => btnClicked === "REMOVE" && handleDelete(employee.idx)}>
                {btnClicked === "REMOVE" && "Ok" || "Close"}
              </button>
              {btnClicked === "REMOVE" && (
                <button
                  type="button"
                  className="btn btn-warning border-0 rounded-pill text-uppercase"
                  data-bs-dismiss="modal">
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal