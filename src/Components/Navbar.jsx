import Logo from '../assets/airbnb-logo.png';

const Navbar = () =>{
  return (
    <header>
      <nav className='nav'>
        <img src={Logo} alt="" width={85}/>
      </nav>
    </header>
  );
}

export default Navbar;
