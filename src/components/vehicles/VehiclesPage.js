import React from 'react';
import css from '../../styles/default.less';

export default function VehiclesPage(props) {
    return (
        <div className="row">
            <div className="vehicle-list-block col-sm-4">
                <ul className="vehicle-list">
                    <li><a href="#">Ford Fiesta</a></li>
                    <li className="selected"><a href="#">Toyota Corolla</a></li>
                    <li><a href="#">Honda Civic</a></li>
                    <li><a href="#">Audi Rx8</a></li>
                    <li><a href="#">Mitsubhishi Challenger</a></li>
                    <li className="vehicle-list_new"><a href="#">New...</a></li>
                </ul>
            </div>

            <div className="vehicle-detail-block col-sm-8">
                <div className="vehicle-summary_block">
                    <h1>Toyota Corolla</h1>
                    <div className="vehicle-mileage">
                        <label>MILEAGE</label>
                        <span className="value">9.7</span>
                        <span className="unit">l/100 km</span>
                    </div>
                    <div className="vehicle-odometer">
                        <label>ODOMETER</label>
                        <span className="value">23,455</span>
                        <span className="unit">km</span>
                    </div>
                </div>

                <div className="vehicle-refill_block">
                    <h3>Recent Refills</h3>
                    <ul className="vehicle-refill_list">
                        <li className="vehicle-refill_form">
                            <span className="refill-date">
                                <input type="date" />
                            </span>
                            <span className="refill-odometer">
                                <input type="text" placeholder="Odometer" />
                            </span>
                            <span className="refill-amount">
                                <input type="text" placeholder="litres" />
                            </span>
                            <span className="refill-type">
                                <select>
                                    <option>FULL TANK</option>
                                    <option>PARTIAL</option>
                                </select>
                            </span>
                        </li>
                        <li className="vehicle-refill_row">
                            <span className="refill-date">Yesterday</span>
                            <span className="refill-odometer">23,098 km</span>
                            <span className="refill-amount">34.5l</span>
                            <span className="refill-type">Full Tank</span>
                        </li>
                        <li className="vehicle-refill_row">
                            <span className="refill-date">14th, Feb</span>
                            <span className="refill-odometer">22,576 km</span>
                            <span className="refill-amount">38.5l</span>
                            <span className="refill-type">Full Tank</span>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}