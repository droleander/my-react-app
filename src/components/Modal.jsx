/* eslint-disable react/prop-types */

import { useState } from "react";

function Modal({ employee, handleDelete }) {
  
  // const [show, setShow] = useState(false);
  const [modalHeading, setModalHeading] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  
  // const handleShow = () => setShow(true);
  const handleClose = () => {
    // setShow(false);
    btnClicked === "REMOVE" && handleDelete(employee.idx);
  };
  
  const handleButtonClick = (heading, content, button) => {
    setModalHeading(heading);
    setModalContent(content);
    setBtnClicked(button);
    // handleShow();
  };
  
  const [btnClicked, setBtnClicked] = useState(null);
  
  const detailsHeading = "Employee Details";
  const detailsContent =
    <p>
      <b>NAME:</b> {employee.name || "NAME"} <br />
      <b>JOB:</b> {employee.job || "POSITION"} <br />
      <b>ID:</b> {employee.idx.slice(0, 8) || "XXXXXXXX"} <br />
      <b>HOBBIES:</b> {employee.hobbies || "HOBBIES"} <br />
    </p>;
  const removeHeading = "Remove Employee";
  const removeContent =
    <p>
      <b>{employee.name || "NAME"}</b>... so long, farewell, auf Wiedersehen, byeee!
    </p>;
  
  return (
    <>
      {/* <!-- "DETAILS" button triggers alertModal --> */}
      <button
        className="btn btn-warning border-0 rounded-pill text-uppercase mx-auto"
        onClick={() => handleButtonClick(detailsHeading, detailsContent, "DETAILS")}
        data-bs-toggle="modal"
        data-bs-target={"#alertModal" + employee.idx}>
        Details
      </button>
      
      {/* <!-- "REMOVE" button triggers alertModal --> */}
      <button
        className="btn btn-warning border-0 rounded-pill text-uppercase mx-auto"
        onClick={() => handleButtonClick(removeHeading, removeContent, "REMOVE")}
        data-bs-toggle="modal"
        data-bs-target={"#alertModal" + employee.idx}>
        Remove
      </button>

      {/* <!-- alertModal triggered by "DETAILS" and "REMOVE" buttons --> */}
      <div className="modal fade" id={"alertModal" + employee.idx} tabIndex="-1" aria-labelledby="alertModalLabel" aria-hidden="true" >
        <div className="modal-dialog">
          <div className="modal-content border-2 border-primary bg-light rounded-5 text-dark pb-2">
            <div className="modal-header border-2 border-primary border-opacity-25">
              <h1 className="modal-title h3" id="alertModalLabel">{modalHeading}</h1>
              <button type="button" className="btn-close fs-3" data-bs-dismiss="modal" aria-label="Close" onClick={() => handleClose()}></button>
            </div>
            <div className="modal-body pb-0">{modalContent}</div>
            <div className="modal-footer border-2 border-primary border-opacity-25">
              <p className="m-auto">&copy; {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* <!-- Modal triggered by "DETAILS" and "REMOVE" buttons --> */}
      {/* {show && (
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
      )} */}
      
    </>
  )
}

export default Modal