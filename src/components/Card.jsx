/* eslint-disable react/prop-types */
function Card({employees, heading, handleDelete}) {
  
  return (
    <main className="flex-grow-1 flex-shrink-0 py-3">
      <h2 className="text-center">{heading}</h2>
      <div className="container d-flex flex-wrap justify-content-center">
        {employees.map(employee => (
          <div className="card border-0 bg-primary rounded-5 text-white m-2 p-3" key={employee.idx}>
            <img className="card-img-top d-flex justify-content-center align-items-center border border-3 border-warning rounded-circle m-auto" src={employee.pic} alt={`Photo - ${typeof employee.name !== "undefined" ? employee.name : "N.A."}`}/>
            <div className="card-body text-center">
              <h2 className="card-title border-bottom text-uppercase h3">{employee.name}</h2>
              <p className="card-text lh-1">{employee.job}</p>
            </div>
            <div className="d-flex justify-content-center align-items-center mb-2">
              
              {/* <button className="btn btn-warning border-0 rounded-pill mx-auto"
                onClick={() => {
                  const details =
                    "Employee Name: " + employee.name +
                    "\nPosition: " + employee.job +
                    "\nEmployee ID: " + employee.idx.slice(0, 8) +
                    "\nHobbies: " + employee.hobbies
                  alert(details)
                }}>
                Details
              </button> */}
              
              {/* <!-- Button trigger detailsModal --> */}
              <button type="button" className="btn btn-warning border-0 rounded-pill text-uppercase mx-auto" data-bs-toggle="modal" data-bs-target={"#detailsModal" + employee.idx}>
                Details
              </button>
              {/* <!-- Modal --> */}
              <div className="modal fade" id={"detailsModal" + employee.idx} tabIndex="-1" aria-labelledby="detailsModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content bg-light bg-opacity-75 rounded-4 text-dark pb-2">
                    <div className="modal-header border-2 border-primary">
                      <h1 className="modal-title h5" id="detailsModalLabel">Employee Details</h1>
                      <button type="button" className="btn-close fs-3" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <b>Name:</b> {employee.name} <br />
                      <b>Job:</b> {employee.job} <br />
                      <b>ID:</b> {employee.idx.slice(0, 8)} <br />
                      <b>Hobbies:</b> {employee.hobbies} <br />
                    </div>
                    {/* <div className="modal-footer">
                      <button type="button" className="btn btn-warning border-0 rounded-pill mx-auto" data-bs-dismiss="modal">Close</button>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* <button className="btn btn-warning border-0 rounded-pill mx-auto"
                onClick={() => {
                  alert(`${employee.name}... so long, farewell, auf Wiedersehen, byeee!`)
                  handleDelete(employee.idx)
                }}>
                Remove
              </button> */}

              {/* <!-- Button trigger removeModal --> */}
              <button type="button" className="btn btn-warning border-0 rounded-pill text-uppercase mx-auto" data-bs-toggle="modal" data-bs-target={"#removeModal" + employee.idx} onClick={() => handleDelete(employee.idx)}>
                Remove
              </button>
              {/* <!-- Modal --> */}
              <div className="modal fade" id={"removeModal" + employee.idx} tabIndex="-1" aria-labelledby="removeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content bg-light bg-opacity-75 rounded-4 text-dark pb-2">
                    <div className="modal-header border-2 border-primary">
                      <h1 className="modal-title h5" id="removeModalLabel">Employee Removed</h1>
                      <button type="button" className="btn-close fs-3" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      {employee.name}... so long, farewell, auf Wiedersehen, byeee!
                    </div>
                    {/* <div className="modal-footer">
                      <button type="button" className="btn btn-warning border-0 rounded-pill" data-bs-dismiss="modal">Close</button>
                    </div> */}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Card