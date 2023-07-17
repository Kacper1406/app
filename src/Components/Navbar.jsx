import Image from '../assets/logo192.png';

function Navbar() {
  return (
    <header>
      <nav className='nav'>
        <div className="nav-header">
          <img src={Image} alt='react logo' width={30} />
          <p>ReactFacts</p>
        </div>
        <ul className='nav-items'>
          <li>React Course - Project 1</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
