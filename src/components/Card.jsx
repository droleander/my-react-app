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
              
              <button className="btn btn-warning border-0 rounded-pill mx-auto"
                onClick={() => {
                  const details =
                    "Employee Name: " + employee.name +
                    "\nPosition: " + employee.job +
                    "\nEmployee ID: " + employee.idx.slice(0, 8) +
                    "\nHobbies: " + employee.hobbies
                  alert(details)
                }}>
                Details
              </button>

              <button className="btn btn-warning border-0 rounded-pill mx-auto"
                onClick={() => {
                  alert(`${employee.name}... so long, farewell, auf Wiedersehen, byeee!`)
                  handleDelete(employee.idx)
                }}>
                Remove
              </button>
              
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Card