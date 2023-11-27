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
                }}>Details
              </button> */}
              
              {/* <button className="btn btn-warning border-0 rounded-pill mx-auto"
                onClick={() => {
                  alert(`${employee.name}... so long, farewell, auf Wiedersehen, byeee!`)
                  handleDelete(employee.idx)
                }}>Remove</button> */}
              
              {/* <!-- Button trigger detailsModal --> */}
              <button type="button" className="btn btn-warning border-0 rounded-pill mx-auto" data-bs-toggle="modal" data-bs-target="#detailsModal">
                Details
              </button>

              {/* <!-- Modal --> */}
              <div className="modal fade" id="detailsModal" tabIndex="-1" aria-labelledby="detailsModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title text-primary h5" id="detailsModalLabel">Employee Details</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-dark">
                      Employee Name: {employee.name} <br />
                      Position: {employee.job} <br />
                      Employee ID: {employee.idx.slice(0, 8)} <br />
                      Hobbies: {employee.hobbies}
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-warning border-0 rounded-pill" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Button trigger deleteModal --> */}
              <button type="button" className="btn btn-warning border-0 rounded-pill mx-auto" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => handleDelete(employee.idx)}>
                Remove
              </button>

              {/* <!-- Modal --> */}
              <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title text-primary h5" id="deleteModalLabel">Remove Employee</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-dark">
                      {employee.name}... so long, farewell, auf Wiedersehen, byeee!
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-warning border-0 rounded-pill" data-bs-dismiss="modal">Close</button>
                    </div>
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