import React from 'react'
import {Nav, NavItem} from 'react-bootstrap'
import DailyForecastDetails from '../forecasts/DailyForecastDetails'


const LeftSide = ({dailyForecasts, indices}) => {
    return (
                <Nav className="flex-column">
                 {dailyForecasts.map((forecast, index) => (
                     <NavItem>
                         <DailyForecastDetails key={forecast.EpochDateTime} forecast={forecast} rating={indices[index]}></DailyForecastDetails>
                     </NavItem>
                 ))}
                </Nav>
    )

}

export default LeftSide