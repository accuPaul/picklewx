import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Forecastgrid from "./components/forecasts/ForecastGrid";
import CitySearch from './components/CitySearch'
import axios from "axios";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')

  useEffect(() => {
    const blob = process.env.REACT_APP_NONSENSE
    const testKey = process.env.REACT_APP_TESTER

    setIsLoading(true)

    const fetchForecasts = async () => {
      // first fetch the location key for the requested city...

      console.log(`api key is ${blob}`)

      const locations = await axios(
        `http://api.accuweather.com/locations/v1/cities/search.json?q=${query?query:'Mt. Pleasant, SC'}&apikey=${testKey}&language=en-us&alias=always`
        )
        .catch(function(error) {
          console.log(error)
        })

        // Just use the first one we get
        let locationKey = locations.data? locations.data[0].Key : 2132170

        const result = await axios(
        `http://apidev.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}?details=true&apikey=${testKey}`
      )
      .catch(function(error) { console.error(error)});

      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };

    fetchForecasts();
  }, [query]);

  return (
    <Container>
      <div className="header">
        <Header />
        <CitySearch getQuery={(city) => setQuery(city)} />
        <Forecastgrid isLoading={isLoading} items={items} />
      </div>
    </Container>
  );
};

export default App;
