import axios, { AxiosInstance, AxiosResponse } from 'axios'

// API base configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.openweathermap.org/data/2.5'

// Create axios instance with default config
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor to add API key to all requests
apiClient.interceptors.request.use(
  (config) => {
    // Add API key if available
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY
    if (apiKey && config.params) {
      config.params.appid = apiKey
    } else if (apiKey) {
      config.params = { appid: apiKey }
    }
    
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
      // Handle unauthorized access
      console.error('Unauthorized: Invalid API key')
    } else if (error.response?.status >= 500) {
      // Handle server errors
      console.error('Server Error: Please try again later')
    }
    
    return Promise.reject(error)
  }
)

export default apiClient