import { type CurrentWeatherType } from "../index";

type CurrentWeatherProps = {
  currentWeather: CurrentWeatherType | null;
};

const CurrentWeather = ({ currentWeather }: CurrentWeatherProps) => {
  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto bg-gradient-to-b from-blue-300 to-blue-200 rounded-3xl shadow-lg p-8 mb-6">
      <div className="flex items-center w-full justify-between">
        <div>
          <p className="text-6xl font-extralight text-white drop-shadow">
            {currentWeather?.current.temp_c}°
          </p>
          <p className="text-2xl text-white font-medium drop-shadow">
            {currentWeather?.current.condition.text}
          </p>
        </div>
        <img
          src={currentWeather?.current.condition.icon}
          alt="icon"
          className="w-30 h-30"
        />
      </div>
      <div className="flex w-full justify-between mt-8 bg-[#cbe9fd] bg-opacity-30 rounded-2xl px-6 py-4">
        <div className="flex-1 text-center border-r border-white border-opacity-40">
          <p className="text-[20px] text-[#626F73]">Humidity</p>
          <p className="text-2xl font-bold text-[#626F73]">
            {currentWeather?.current.humidity}%
          </p>
        </div>
        <div className="flex-1 text-center">
          <p className="text-[20px] text-[#626F73]">Wind</p>
          <p className="text-2xl font-bold text-[#626F73]">
            {currentWeather?.current.wind_kph?.toLocaleString("en-US", {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            })}{" "}
            km/h
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
