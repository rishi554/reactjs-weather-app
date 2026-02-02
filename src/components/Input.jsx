import React from "react";
import { useWeather } from "../context/Weather";

const Input = () => {
    const weather = useWeather();
    console.log('weather',weather);
    return <input id="email-address" value={weather.city} onChange={(e) => weather.setCity(e.target.value)} type="text" name="email" required placeholder="Enter your location" className="min-w-4xl flex-auto rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
}

export default Input;