import { createContext, useContext, useState } from "react";
import { getWeatherByCity, getWeatherByLocation } from "../api";

export const WeatherContext = createContext(null);

export const useWeather = () =>{
    return useContext(WeatherContext);
}

export const WeatherProvider = (props) => {
    const [apiResponse, setApiResponse] = useState(null);
    const [city, setCity] = useState('');

    const fetchWeatherData = async() => {
        const response = await getWeatherByCity(city);
        setApiResponse(response);
    }

    const getCurrentUserWeatherData = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeatherByLocation(position.coords.latitude, position.coords.longitude).then((data) =>{
                setApiResponse(data)
            });
        } )
    }

    return (
        <WeatherContext.Provider value={{ city, apiResponse, setCity, fetchWeatherData, getCurrentUserWeatherData }}>
            {props.children}
        </WeatherContext.Provider>
    )
}