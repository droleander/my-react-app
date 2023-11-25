/* eslint-disable react/prop-types */
function Card({employees, heading, handleDelete}) {
  
  return (
    <main className="flex-grow-1 flex-shrink-0 py-3">
      <h2 className="text-center">{heading}</h2>
      <div className="container d-flex flex-wrap justify-content-center">
        {employees.map(employee => (
          <div className="card bg-primary text-white m-2 p-4" key={employee.idx}>
            <img className="card-img-top d-flex justify-content-center align-items-center border border-3 border-warning rounded-circle m-auto" src={employee.pic} alt={`Photo - ${typeof employee.name !== "undefined" ? employee.name : "N.A."}`}/>
            <div className="card-body text-center">
              <h2 className="card-title text-uppercase">{employee.name}</h2>
              <p className="card-text mb-3 lh-1"><small>{employee.job}</small></p>
            </div>
            <button className="btn btn-warning py-2" onClick={() => handleDelete(employee.idx)}>REMOVE</button>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Card