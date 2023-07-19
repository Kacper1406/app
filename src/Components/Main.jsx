/* eslint-disable react/prop-types */
import Person from '../assets/katie-zaferes.png';
import Image from '../assets/photo-grid.png';
import posts from '../data/posts';

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

  return (
    <div className="card">
      <div className="card-img">
        <p>{props.status}</p>
        <img src={Person} alt="persons photo"/>
      </div>

      <div className="card-desc">
        <p className='person-rating'><span>{props.rating}</span> ({props.reviewCount}) <span>{props.country}</span></p>
        <p className='person-desc'>{props.descritption}</p>
        <p className='person-price'><span>From ${props.price}</span> / Person </p>
      </div>
    </div>
  )
}

const Content = () => {

  const post = posts.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    );
  });

  return (
    <main>
      <PhotoGrid/>
      <div className="card-grid">
        {post}
      </div>
    </main>
  );
}

export default Content;