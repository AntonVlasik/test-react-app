
import apiClient from '../client'
import { WeatherData } from './models';
import { routes } from './routes'

// Weather service functions
export const weatherService = {
  getCurrentWeather: async (params: { latitude: number; longitude: number; hourly: string }): Promise<WeatherData> => {
    const response = await apiClient.get<WeatherData>(routes.currentWeather(), {
      params,
    });

    return response.data;
  },

  getCurrentWeatherByCoords: async (lat: number, lon: number): Promise<WeatherData> => {
    const response = await apiClient.get<WeatherData>(routes.currentWeather(), {
      params: {
        lat,
        lon,
        units: 'metric',
      },
    });

    return response.data;
  },
}

