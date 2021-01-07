import React from "react";
import Card from "react-bootstrap/Card";
import GetIcon from '../middleware/GetIcon'
import PrettyTemps from '../middleware/PrettyTemps'

const DailyForecastDetails = ({ forecast, rating }) => {
  return (
    <Card border={forecast.Day.HasPrecipitation ? 'warning' : 'success'}>
      <Card.Header><a href={forecast.Link.replace("daily","hourly")} target="_blank" rel="noreferrer">{new Date(forecast.Date).toString().split(' ')[0]}</a></Card.Header>
      <Card.Img variant="top" src={process.env.PUBLIC_URL+GetIcon(forecast.Day.Icon)} />
      <Card.Body>
        <Card.Title>{forecast.Day.IconPhrase}</Card.Title>
        <Card.Text>
          {PrettyTemps(forecast.Temperature.Maximum.Value)} /{' '}
          {PrettyTemps(forecast.Temperature.Minimum.Value)}<br />
          Wind: {Math.round(forecast.Day.Wind.Speed.Value)}-{Math.round(forecast.Day.WindGust.Speed.Value)}<br />
          Precip chance: {forecast.Day.PrecipitationProbability}%
        </Card.Text>
      </Card.Body>
      <Card.Footer>PickleWx Rating: {rating.Category}</Card.Footer>
    </Card>
  );
};

export default React.memo(DailyForecastDetails);
