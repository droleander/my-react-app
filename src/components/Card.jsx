/* eslint-disable react/prop-types */
function Card({persons, heading, handleDelete}) {
  
  return (
    <main>
      <h2 className="text-center">{heading}</h2>
      <div className="container d-flex flex-wrap justify-content-center">
        {persons.map(person => (
          <div className="card text-center text-light bg-primary" key={person.idx}>
            <img className="card-img-top" src={person.pic || "https://via.placeholder.com/150"} alt={`${person.name} - Photo`} />
            <div className="card-body">
              <h2 className="card-title">{person.name || "Name"}</h2>
              <p className="card-text">{person.job || "Position"}</p>
            </div>
            <button className="btn btn-light" onClick={() => handleDelete(person.idx)}>REMOVE</button>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Card