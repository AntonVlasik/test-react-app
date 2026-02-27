import axios, { AxiosInstance, AxiosResponse } from 'axios'

// API base configuration
const API_BASE_URL = import.meta.env['VITE_API_BASE_URL'] || 'https://api.open-meteo.com/v1'

// Create axios instance with default config
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor to add API key (only for OpenWeatherMap)
apiClient.interceptors.request.use(
  (config) => {
    
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error) => {
    // Global error handling
    console.error('API Error:', error.response?.data || error.message)
    
    if (error.response?.status === 401) {
      // Handle unauthorized access (mainly for OpenWeatherMap)
      console.error('Unauthorized: Invalid API key')
    } else if (error.response?.status >= 500) {
      // Handle server errors
      console.error('Server Error: Please try again later')
    } else if (error.response?.status === 404) {
      // Handle not found (common for location not found)
      console.error('Location not found')
    }
    
    return Promise.reject(error)
  }
)

/*
 * API Configuration Options:
 * 
 * 1. Open-Meteo API (DEFAULT - FREE, no API key required)
 *    - Base URL: https://api.open-meteo.com/v1
 *    - Usage: Just call endpoints directly, no authentication needed
 *    - Example: /forecast?latitude=52.52&longitude=13.41&current_weather=true
 *    - Documentation: https://open-meteo.com/
 * 
 * 2. OpenWeatherMap API (requires API key)
 *    - Base URL: https://api.openweathermap.org/data/2.5  
 *    - Usage: Set VITE_WEATHER_API_KEY environment variable
 *    - Example: /weather?q=London&appid=YOUR_API_KEY
 *    - Documentation: https://openweathermap.org/api
 */

export default apiClient