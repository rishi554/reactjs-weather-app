const baseURL = "https://api.weatherapi.com/v1/current.json?key=XYZ";

export const getWeatherByCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`, {
        method: "GET"
    });
    return response.json();
}

export const getWeatherByLocation = async(lat,long) =>{
    const response = await fetch(baseURL + `&q=${lat},${long}&aqi=yes`,{
        method:"GET"
    });
    return response.json();
}