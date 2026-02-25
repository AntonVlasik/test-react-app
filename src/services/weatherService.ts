import { useQuery, UseQueryResult } from '@tanstack/react-query'
import apiClient from 'src/services/apiClient'

// Weather data types
export interface WeatherData {
  id: number
  name: string
  weather: Array<{
    id: number
    main: string
    description: string
    icon: string
  }>
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  wind: {
    speed: number
    deg: number
  }
  sys: {
    country: string
    sunrise: number
    sunset: number
  }
}

// Weather service functions
export const weatherService = {
  getCurrentWeather: async (city: string): Promise<WeatherData> => {
    const response = await apiClient.get<WeatherData>('/weather', {
      params: {
        q: city,
        units: 'metric',
      },
    })
    return response.data
  },

  getCurrentWeatherByCoords: async (lat: number, lon: number): Promise<WeatherData> => {
    const response = await apiClient.get<WeatherData>('/weather', {
      params: {
        lat,
        lon,
        units: 'metric',
      },
    })
    return response.data
  },
}

// React Query hooks for weather data
export const useCurrentWeather = (
  city: string,
  enabled = true
): UseQueryResult<WeatherData, Error> => {
  return useQuery({
    queryKey: ['weather', 'current', city],
    queryFn: () => weatherService.getCurrentWeather(city),
    enabled: enabled && Boolean(city),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

export const useCurrentWeatherByCoords = (
  lat: number,
  lon: number,
  enabled = true
): UseQueryResult<WeatherData, Error> => {
  return useQuery({
    queryKey: ['weather', 'current', lat, lon],
    queryFn: () => weatherService.getCurrentWeatherByCoords(lat, lon),
    enabled: enabled && Boolean(lat && lon),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}