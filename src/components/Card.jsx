/* eslint-disable react/prop-types */
function Card({persons, heading, handleDelete}) {
  
  return (
    <main className="py-3">
      <h2 className="text-center">{heading}</h2>
      <div className="container d-flex flex-wrap justify-content-center">
        {persons.map(person => (
          <div className="card border-primary bg-light" key={person.idx}>
            <img className="card-img-top" src={person.pic || "https://via.placeholder.com/150"} alt={`Photo - ${person.name}`} />
            <div className="card-body text-center">
              <h2 className="card-title">{person.name || "Name"}</h2>
              <h3 className="card-subtitle text-muted h6">{person.job || "Position"}</h3>
            </div>
            <button className="btn btn-primary" onClick={() => handleDelete(person.idx)}>REMOVE</button>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Card