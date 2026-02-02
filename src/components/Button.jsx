import React from "react";
import { useWeather } from "../context/Weather";

const Button = () => {
    const weather = useWeather()
    console.log(weather);
    return <button type="submit" onClick={weather.fetchWeatherData} className="m-5 flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Search Location</button>;
}

export default Button;