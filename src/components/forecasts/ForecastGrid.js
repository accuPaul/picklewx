import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import ForecastDetails from "./ForecastDetails";
import Spinner from 'react-bootstrap/Spinner'

const ForecastGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
    </Spinner>
  ) : (
    <CardDeck>
      {items.map((item) => (
        <ForecastDetails key={item.EpochDateTime} item={item}></ForecastDetails>
      ))}
    </CardDeck>
  );
};

export default ForecastGrid;
