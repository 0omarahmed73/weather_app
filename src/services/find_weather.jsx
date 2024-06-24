import { instance } from "./axios";

export class Weather {
  static findWeather = async ({ state }) => {
    try {
      const response = await instance.get(
        `&q=${state.latitude},${state.longitude}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  static findWeatherByCity = async ({ city }) => {
    try {
      const response = await instance.get(`&q=${city}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
}
