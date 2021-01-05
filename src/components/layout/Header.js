import Navbar from 'react-bootstrap/Navbar'

const Header = ({city}) => {
  return (
    <Navbar bg="light" variant="light" className="mb-2">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/icons/pickleball.jpg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{" "}
      Pickleball Weather for {city}
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end muted-text">
        <Navbar.Text>
        (powered by <a href="https://www.accuweather.com">AccuWeather</a>)
        </Navbar.Text>

      </Navbar.Collapse>
  </Navbar>
  );
};

export default Header;
