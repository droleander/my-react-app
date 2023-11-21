import PropTypes from 'prop-types';

function Card(props) {
  
  const name = props.nameProp;
  const job = props.jobProp;
  const pic = props.picProp;
  
  return (
    <div className="card text-center">
      <img className="card-img-top" src={pic} alt="Profile Picture" />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">{job}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  nameProp: PropTypes.string,
  jobProp: PropTypes.string,
  picProp: PropTypes.string
}

Card.defaultProps = {
  nameProp: "Name",
  jobProp: "Position",
  picProp: "https://via.placeholder.com/150"
}

export default Card