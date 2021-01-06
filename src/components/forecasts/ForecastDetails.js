import React from "react";
import { Col, ListGroup, ListGroupItem } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import GetIcon from '../middleware/GetIcon'

const ForecastDetails = ({ item }) => {
  function getLocalTime(forecastDateTime)
  {
      return new Date(forecastDateTime).toLocaleTimeString();
  }

  return (
    <Col className="container-fluid mt-4">
    <Card border={item.HasPrecipitation ? 'warning' : 'success'}>
      <Card.Header>{getLocalTime(item.DateTime)}</Card.Header>
      <Card.Img variant="top" src={process.env.PUBLIC_URL+GetIcon(item.WeatherIcon)} />
      <Card.Body>
        <Card.Title>{item.IconPhrase}</Card.Title>
        <Card.Text>
          {item.Temperature.Value}&deg;{item.Temperature.Unit}<br />
          <span className="text-muted">(Feels like {item.RealFeelTemperature.Value}&deg;)</span>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Wind: {item.Wind.Speed.Value} {item.Wind.Speed.Unit}</ListGroupItem>
        <ListGroupItem>Wind gusts up to {item.WindGust.Speed.Value} {item.WindGust.Speed.Unit}</ListGroupItem>
        <ListGroupItem>Probability of precipitation: {item.PrecipitationProbability}%</ListGroupItem>
      </ListGroup>
    </Card>
    </Col>
  );
};

export default ForecastDetails;
