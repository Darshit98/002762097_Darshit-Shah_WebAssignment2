import React from "react";
import { Link, withRouter } from "react-router-dom";
import moment from "moment";

function WeatherData(props) {
  const { reading, completeData, cityName } = props;
  const _date = new Date(reading.dt * 1000);
  const _img = `owf owf-${reading.weather[0].id} owf-3x`;
  const fahrenheitMax = reading.main.temp_max;
  const fahrenheitMin = reading.main.temp_min;
  const farenheitTemp = reading.main.temp;
  const farenheitFeelsLike = reading.main.feels_like;

  return (
    <div className="row_box">
      <div className="col-122">
        <Link
          to={{
            pathname: `/hourlyForecast/${reading.day}`,
            state: { completeData, cityName }
          }}
        >
          <div className="py-3 mt-3">
            <div className="row_box">
              <div className="cols_card">
                <h4 className="card_text">
                  {moment(_date).format("D MMMM, Y")}
                </h4>
                <h5>{reading.day}</h5>
                <h5>Temperature: {farenheitTemp}°F</h5>
                <i className={_img}></i>
                <p>{reading.weather[0].description}</p>
                <p>
                  Feels Like: {farenheitFeelsLike} °F
                  <br />
                  Minimum: {fahrenheitMin}°F
                  <br />
                  Maximum: {fahrenheitMax}°F
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default withRouter(WeatherData);
