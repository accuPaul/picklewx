import React from "react";
import { Col, ListGroup, ListGroupItem } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import GetIcon from '../middleware/GetIcon'
import PrettyTemps from '../middleware/PrettyTemps'

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
          {PrettyTemps(item.Temperature.Value)}{item.Temperature.Unit}<br />
          <span className="text-muted">(Feels like {item.RealFeelTemperature.Value}&deg;)</span>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Wind: {item.Wind.Direction.Localized} at {Math.round(item.Wind.Speed.Value)} {item.Wind.Speed.Unit}, gusts to {Math.round(item.WindGust.Speed.Value)} </ListGroupItem>
        <ListGroupItem>Probability of precipitation: {item.PrecipitationProbability}%</ListGroupItem>
      </ListGroup>
    </Card>
    </Col>
  );
};

export default ForecastDetails;
