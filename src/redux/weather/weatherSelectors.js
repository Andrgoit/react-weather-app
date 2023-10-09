export const SelectLocation = (state) => state.weather.items.location;
export const SelectCurrent = (state) => state.weather.items.current;
export const SelectForecast = (state) =>
  state.weather.items.forecast.forecastday;
