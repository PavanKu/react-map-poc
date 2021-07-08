import React, {Fragment} from 'react';

const FlightTab = () => {
        return (
            <Fragment>
                <p className="darkGreyText font14 latoBold appendBottom15">Flights</p>
                <ul className="packageFilterFlight mapFlightFilter">
                    <li className="activeFlightTab">With Flights</li>
                    <li>Without Flights</li>
                </ul>
            </Fragment>
        
        );
    }

export default FlightTab;
