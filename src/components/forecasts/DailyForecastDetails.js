import React from "react";
import Card from "react-bootstrap/Card";

const DailyForecastDetails = ({ forecast, rating }) => {
  function getLocalDayName(forecastDateTime)
  {
      return new Date(forecastDateTime).toString().split(' ')[0]; //toLocaleTimeString('en-US', {weekday: 'long'});
  }

  function getIcon(iconNumber) {
    var icon = iconNumber +"";
    while (icon.length < 2) icon = "0"+icon;
    return "/icons/"+icon+"-s.png"
  }

  function getLink(link) {
      return link.replace("daily", "hourly")
  }

  return (
    <Card xs={1} border={forecast.Day.HasPrecipitation ? 'warning' : 'success'}>
      <Card.Header><a href={getLink(forecast.Link)} target="_blank" rel="noreferrer">{getLocalDayName(forecast.Date)}</a></Card.Header>
      <Card.Img variant="top" src={process.env.PUBLIC_URL+getIcon(forecast.Day.Icon)} />
      <Card.Body>
        <Card.Title>{forecast.Day.IconPhrase}</Card.Title>
        <Card.Text>
          Max: {forecast.Temperature.Maximum.Value}&deg; /
          Min: {forecast.Temperature.Minimum.Value}&deg;<br />
        </Card.Text>
      </Card.Body>
      <Card.Footer>PickleWx Rating: {rating.Category}</Card.Footer>
    </Card>
  );
};

export default DailyForecastDetails;
