import React from "react";
import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";

export const APIKEY = "c9a0ca46550648b29ce125849232709";
export const baseUrl = "http://api.weatherapi.com/v1";

export type CurrentWeatherType = {
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    wind_kph: number;
  };
};

export type HourForecast = {
  time: string;
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
};

export type ForecastType = {
  forecast: {
    forecastday: {
      date: string;
      hour: HourForecast[];
    }[];
  };
};

const Weather = () => {
  const [cityName, setCityName] = React.useState("Hanoi");
  const [cityNameInput, setCityNameInput] = React.useState("");
  const [currentWeather, setCurrentWeather] =
    React.useState<CurrentWeatherType | null>(null);
  const [forecast, setForecast] = React.useState<ForecastType | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchCurrentWeatherData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${baseUrl}/current.json?key=${APIKEY}&q=${cityName}&aqi=no&lang=en`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch current weather data");
        }
        const data = await response.json();
        console.log("Current weather data:", data);
        setCurrentWeather(data);
      } catch (error) {
        console.error("Error fetching current weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentWeatherData();
  }, [cityName]);

  React.useEffect(() => {
    const fetchForecastData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${baseUrl}/forecast.json?key=${APIKEY}&q=${cityName}&days=1&aqi=no&alerts=no&lang=en`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch forecast data");
        }
        const data = await response.json();
        console.log("Forecast data:", data);
        setForecast(data);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchForecastData();
  }, [cityName]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    console.log("City name changed:", value);
    setCityNameInput(value);
  };

  const handleSearch = () => {
    setCityName(cityNameInput);
    console.log("Search initiated for city:", cityNameInput);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-blue-300 to-blue-100 py-8">
      <SearchBar handleChange={handleChange} handleSearch={handleSearch} />
      {loading && <p className="text-lg text-blue-700 mt-8">Loading...</p>}
      {!loading && currentWeather && (
        <CurrentWeather currentWeather={currentWeather} />
      )}
      {!loading && forecast && <HourlyForecast forecast={forecast} />}
    </div>
  );
};

export default Weather;
