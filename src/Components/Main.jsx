import PropTypes from 'prop-types';
import Person from '../assets/katie-zaferes.png';
import Image from '../assets/photo-grid.png';

const PhotoGrid = () => {
  return (
    <div className="grid-descrition">
      <div className="img-container">
        <img src={Image} alt="group of people" width={395}/>
      </div>

      <div className="text-heading">
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </div>
  );
};

const Card = props => {

  Card.propTypes = {
    price: PropTypes.string.isRequired,
    descritption: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }

  return (
    <div className="card">
      <div className="card-img">
        <p>{props.status}</p>
        <img src={Person} alt="persons photo"/>
      </div>

      <div className="card-desc">
        <p className='person-rating'><span>{props.rating}</span> (6) <span>USA</span></p>
        <p className='person-desc'>{props.descritption}</p>
        <p className='person-price'><span>From {props.price}</span> / Person </p>
      </div>
    </div>
  )
}

const Content = () => {
  return (
    <main>
      <PhotoGrid/>
      <div className="card-grid">
        <Card
          rating="3"
          descritption="some desc"
          price="$1435"
          status="sold out"
        />
        <Card
          rating="5"
          descritption="another desc"
          price="$13"
          status="available"
        />
        <Card
          rating="6"
          descritption="awesome dude"
          price="$1499"
          status="sold out"
        />
      </div>
    </main>
  );
}

export default Content;