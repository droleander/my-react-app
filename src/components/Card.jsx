/* eslint-disable react/prop-types */
function Card({employees, heading, handleDelete}) {
  
  return (
    <main className="flex-grow-1 flex-shrink-0 py-3">
      <h2 className="text-center">{heading}</h2>
      <div className="container d-flex flex-wrap justify-content-center">
        {employees.map(employee => (
          <div className="card bg-primary text-white m-2 p-4" key={employee.idx} title={`Eh di siya na ang ${employee.job}!`}>
            <img className="card-img-top d-flex justify-content-center align-items-center border border-3 border-warning rounded-circle m-auto" src={employee.pic || "ttps://via.placeholder.com/150"} alt={`Photo - ${typeof employee.name !== "undefined" ? employee.name : "N.A."}`}/>
            <div className="card-body text-center">
              <h2 className="card-title">{employee.name || "Name"}</h2>
              <h3 className="card-subtitle h6">{employee.job || "Position"}</h3>
            </div>
            <button className="btn btn-warning py-2 mt-3" onClick={() => handleDelete(employee.idx)}>REMOVE EMPLOYEE</button>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Card