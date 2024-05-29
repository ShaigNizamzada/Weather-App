import React, { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("");
  // console.log(import.meta.env.VITE_WEATHER_API);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/forecast.json?key=${
            import.meta.env.VITE_WEATHER_API
          }&q=${location}&days=4&aqi=yes&alerts=yes`
        );
        setWeatherData(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    if (location) {
      fetchData();
    }
  }, [location]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <>
      <div className="app-section">
        <div className="d-flex align-items-center justify-content-center">
          <h1 className="app-title text-center ps-5 my-3">Weather App</h1>
          <iframe src="https://lottie.host/embed/0e5aa76a-c778-4138-8560-67a3cbd34712/hbhX5azYyD.json"></iframe>
        </div>
        <div className="input-section d-flex align-items-center justify-content-center">
          <input
            className="location-input mt-3 mb-5"
            type="text"
            placeholder="Location..."
            value={location}
            onChange={handleLocationChange}
          />
        </div>
        {weatherData && (
          <div className="weather-section">
            <div className="row">
              {weatherData.forecast.forecastday.map((day) => (
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 cart mx-auto mb-3">
                  <div className="detail-section" key={day.date}>
                    <h2 className="date mb-4 mt-1 text-center"> {day.date} </h2>
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        className="weather-icon mb-3"
                        src={day.day.condition.icon}
                        alt={day.day.condition.text}
                        width={130}
                      />
                    </div>

                    <p className="temperature mb-4 text-center fs-1 fw-bold">
                      {Math.round(day.day.avgtemp_c)} °C
                    </p>
                    <p className="temperature text-center fs-3">
                      {" "}
                      {day.day.condition.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
