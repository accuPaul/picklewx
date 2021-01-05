import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Header from "./components/layout/Header";
import LeftSide from "./components/layout/LeftSide";
import Forecastgrid from "./components/forecasts/ForecastGrid";
import CitySearch from './components/layout/CitySearch'
import axios from "axios";
import "./App.css";
import { Col, Row } from "react-bootstrap";

const App = () => {
  const [items, setItems] = useState([]);
  const [dailyForecasts, setDailyForecasts] = useState([])
  const [indices, setIndices] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('Mt. Pleasant, SC')

  useEffect(() => {
    const blob = process.env.REACT_APP_NONSENSE
    //const testKey = process.env.REACT_APP_TESTER

    setIsLoading(true)

    const fetchForecasts = async () => {
      // first fetch the location key for the requested city...

      const locations = await axios(
        `http://dataservice.accuweather.com/locations/v1/cities/search.json?q=${query}&apikey=${blob}&language=en-us&alias=always`
        )
        .catch(function(error) {
          console.log(error)
        })

        // Just use the first one we get
        let locationKey = locations.data? locations.data[0].Key : 2132170

        // Now fetch hour-by-hour

        const result = await axios(
        `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}?details=true&apikey=${blob}`
      )
      .catch(function(error) { console.error(error)});

      setItems(result.data);

      // Fetch Indices
      const ind = await axios(
        `https://dataservice.accuweather.com/indices/v1/daily/5day/${locationKey}/6?apikey=${blob}`
      )
      .catch(function(error) { console.error(error)});
      setIndices(ind.data)

      // Fetch Daily Forecast
      const daily = await axios(
        `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${blob}`
      )
      .catch(function(error) { console.error(error)});
      setDailyForecasts(daily.data.DailyForecasts);

      setIsLoading(false);
    };

    fetchForecasts();
  }, [query]);

  return (
    <Container>
        <Header city={query}/>
        <Row>
          <Col xs={2}>
            <LeftSide dailyForecasts={dailyForecasts} indices={indices} />
          </Col>
          <Col xs={10}>
          <CitySearch getQuery={(city) => setQuery(city)} />
        <Forecastgrid isLoading={isLoading} items={items} />
          </Col>
        </Row>
    </Container>
  );
};

export default App;
