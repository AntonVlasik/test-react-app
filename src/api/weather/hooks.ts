import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { WeatherData } from './models'
import { weatherService } from './service'

// React Query hooks for weather data
export const useCurrentWeather = (
  location: { latitude: number; longitude: number; } | null,
  params: { hourly: string },
  enabled = true
): UseQueryResult<WeatherData, Error> => {

  return useQuery({
    queryKey: ['weather', 'current', location],
    queryFn: () => weatherService.getCurrentWeather({...(location ?? { latitude: 0, longitude: 0 }), ...params}),
    enabled: enabled && Boolean(location),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
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