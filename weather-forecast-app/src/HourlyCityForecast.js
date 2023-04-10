import React from "react";
import moment from "moment";
// var moment = require("moment");

function HourlyForecast(props) {
  let _date = new Date();
  const weekday = props.data.dt * 1000;
  _date.setTime(weekday);
  const _img = `owf owf-${props.data.weather[0].id} owf-3x`;
  const fahrenheitMax = Math.round(props.data.main.temp_max);

  const fahrenheitMin = Math.round(props.data.main.temp_min);

  const farenheitTemp = Math.round(props.data.main.temp);

  const farenheitFeelsLike = Math.round(props.data.main.feels_like);

  return (
    <div className="row_box">
      <div className="col-122">
        <div className="py-2 my-3">
          <div className="row_box">
            <div className="cols_card">
              <h4 className="card_text">
                {moment(_date).format("D MMMM, Y")}
              </h4>
              <h5>
                {props.data.day} at {moment(_date).format("HH:mm")}
              </h5>
              <h5>Temperature: {farenheitTemp}°F</h5>
              <i className={_img}></i>
              <p>{props.data.weather[0].description}</p>
              <p>
                  Feels Like: {farenheitFeelsLike} °F
                  <br/>
                  Minimum: {fahrenheitMin}°F 
                  <br/>
                  Maximum: {fahrenheitMax}°F  
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HourlyForecast;