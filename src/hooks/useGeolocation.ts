import { useEffect, useState } from "react"

// Custom hook for geolocation
export const useGeolocation = () => {
  const [location, setLocation] = useState<{
    latitude: number
    longitude: number
  } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser.')
      setLoading(false)
      return
    }

    const handleSuccess = (position: GeolocationPosition) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
      setLoading(false)
    }

    const handleError = (error: GeolocationPositionError) => {
      setError(error.message)
      setLoading(false)
    }

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
      timeout: 10000,
      maximumAge: 60000, // 1 minute
      enableHighAccuracy: true,
    })
  }, [])

  return { location, error, loading }
}