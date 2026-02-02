import React, { useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import { useWeather } from "../context/Weather";

const WeatherCard = () => {
    const weather = useWeather();

    useEffect(() => {
        // Get current user location to show weather info
        weather.getCurrentUserWeatherData();
    }, []);
    return (
        <div class="w-screen bg-white py-24 sm:py-32">
            <div className="mx-auto text-center max-w-4xl px-6 lg:px-8">
                <Input />
                <Button />
            </div>
            <hr className="divide-pink-200 m-5" />
            <div className="flex justify-center items-center h-20">
                <img className="rounded-2xl" src={weather.apiResponse?.current?.condition?.icon} />
                <br />
                <small className="flex justify-center">{weather.apiResponse?.current?.condition?.text}</small>
            </div>
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt class="text-base/7 text-gray-600">Temprature</dt>
                        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{weather.apiResponse?.current?.temp_c} C</dd>
                    </div>
                    <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt class="text-base/7 text-gray-600">Air Quality Index (AQI)</dt>
                        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{(weather.apiResponse?.current?.air_quality?.o3 - weather.apiResponse?.current?.air_quality?.pm10 + weather.apiResponse?.current?.air_quality?.so2 + weather.apiResponse?.current?.air_quality?.no2).toFixed(0)}</dd>
                    </div>
                    <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt class="text-base/7 text-gray-600">Location</dt>
                        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{weather.apiResponse?.location?.name},</dd>
                        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{weather.apiResponse?.location?.region},</dd>
                        <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{weather.apiResponse?.location?.country}</dd>
                    </div>
                </dl>
            </div>
            <hr className="divide-pink-200 m-5" />
        </div>
    );
}

export default WeatherCard;