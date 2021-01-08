import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Header from "./components/layout/Header";
import LeftSide from "./components/layout/LeftSide";
import Forecastgrid from "./components/forecasts/ForecastGrid";
import CitySearch from './components/layout/CitySearch'
import ApiError from './components/layout/ApiError'
import "./App.css";
import { Col, Row } from "react-bootstrap";
import { FetchApi } from "./components/middleware/FetchApi";

const App = () => {
  const [items, setItems] = useState([]);
  const [dailyForecasts, setDailyForecasts] = useState([])
  const [indices, setIndices] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('Mt. Pleasant, SC')
  const [locationId, setLocationID] = useState("7-340578_1_AL")

  useEffect(() => {
    
    setIsLoading(true)

    const fetchForecasts = async () => {
      
        // Now fetch hour-by-hour

      FetchApi('/forecasts/v1/hourly/12hour/{locationId}?details=true',locationId)
      .then(response => { setItems(response.data)})
      .catch(error => {ApiError(error)})

      // Fetch Indices
    
      FetchApi('/indices/v1/daily/5day/{locationId}/6?',locationId)
      .then(response => { setIndices(response.data)})
      .catch(error => {console.log(error)})
      
      // Fetch Daily Forecast
      FetchApi('/forecasts/v1/daily/5day/{locationId}?details=true',locationId)
      .then(response => { setDailyForecasts(response.data.DailyForecasts)})
      .catch(error => {<ApiError Error={error} />})

      setIsLoading(false);
    };

    fetchForecasts();
  }, [locationId]);

  return (
    <Container fluid>
        <Header city={query} />
        <Row>
          <Col xs={4} sm={4} md="2" lg="2">
            <LeftSide dailyForecasts={dailyForecasts} indices={indices} />
          </Col>
          <Col xs={{ span:7, offset:1}} sm={{ span:7, offset:1}} md="8" lg="8">
          <CitySearch getQuery={(city) => setQuery(city)} 
          getLocationId={(location)=> setLocationID(location)} />
        <Forecastgrid isLoading={isLoading} items={items} />
          </Col>
        </Row>
    </Container>
  );
};

export default App;
