import type { ForecastType } from "..";

type HourForecastProps = {
  forecast: ForecastType;
};

const HourlyForecast = ({ forecast }: HourForecastProps) => {
  // Lấy giờ hiện tại
  const now = new Date();
  const currentHour = now.getHours();

  const hours =
    forecast?.forecast?.forecastday[0]?.hour.slice(
      currentHour,
      currentHour + 4
    ) || [];

  return (
    <div className="w-full max-w-md mx-auto mt-2">
      <div className="bg-white bg-opacity-60 rounded-2xl p-4">
        <p className="text-gray-700 font-semibold mb-2 ml-1">Now</p>
        <div className="flex justify-between">
          {hours.map((hour, idx) => (
            <div key={hour.time} className="flex flex-col items-center flex-1">
              <img
                src={hour.condition.icon}
                alt={hour.condition.text}
                className="w-10 h-10 mb-1"
              />
              <p className="text-lg font-bold text-gray-800">{hour.temp_c}°</p>
              <p className="text-sm text-gray-500">
                {idx === 0 ? "Now" : hour.time.split(" ")[1].slice(0, 5)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
