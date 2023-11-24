/* eslint-disable react/prop-types */
function Card({employees, heading, handleDelete}) {
  
  return (
    <main className="py-3">
      <h2 className="text-center">{heading}</h2>
      <div className="container d-flex flex-wrap justify-content-center">
        {employees.map(employee => (
          <div className="card border-0 bg-light" key={employee.idx} title={`Eh di siya na ang ${employee.job}!`}>
            <img className="card-img-top" src={employee.pic || "https://via.placeholder.com/150"} alt={`Photo - ${employee.name}`} />
            <div className="card-body text-center">
              <h2 className="card-title">{employee.name || "Name"}</h2>
              <h3 className="card-subtitle text-muted h6">{employee.job || "Position"}</h3>
            </div>
            <button className="btn btn-primary" onClick={() => {
              alert(`${employee.name}... byeeee!`)
              handleDelete(employee.idx)
            }}>REMOVE EMPLOYEE</button>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Card