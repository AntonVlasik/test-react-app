import { Box } from '@mui/material'
import { homeStyles } from './Home.styles'
import { useCurrentWeather } from 'src/api/weather/hooks'
import { useGeolocation } from 'src/hooks';

function Home() {
  const { location } = useGeolocation();

  const { data } = useCurrentWeather(location, {
    hourly: "temperature_2m"
  });

  return (
    <Box sx={homeStyles.container}>
         <pre>{JSON.stringify(data, null, 2)}</pre>
    </Box>
  )
}

export default Home
export { Home as Component }
