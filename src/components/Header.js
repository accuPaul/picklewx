import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
  return (
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/icons/pickleball.jpg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Pickleball Weather (powered by <a href="https://www.accuweather.com">AccuWeather</a>)
    </Navbar.Brand>
  </Navbar>
  );
};

export default Header;
