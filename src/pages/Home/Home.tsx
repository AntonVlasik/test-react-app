import { Typography, Box, Card, CardContent, Button } from '@mui/material'
import { Cloud, ThermostatAuto, WbSunny } from '@mui/icons-material'
import { homeStyles } from './Home.styles'

function Home() {
  return (
    <Box sx={homeStyles.container}>
      <Typography variant="h2" component="h1" gutterBottom sx={homeStyles.title}>
        Welcome to Weather App 2026
      </Typography>
      
      <Typography variant="h5" component="p" sx={homeStyles.subtitle}>
        Your modern weather companion built with React 19 and TypeScript
      </Typography>

      <Box sx={homeStyles.featureGrid}>
        <Card>
          <CardContent sx={homeStyles.featureCard}>
            <WbSunny sx={homeStyles.featureIcon} />
            <Typography variant="h6" gutterBottom>
              Current Weather
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Get real-time weather information for your location
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent sx={homeStyles.featureCard}>
            <ThermostatAuto sx={homeStyles.featureIcon} />
            <Typography variant="h6" gutterBottom>
              Temperature Tracking
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Monitor temperature changes throughout the day
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent sx={homeStyles.featureCard}>
            <Cloud sx={homeStyles.featureIcon} />
            <Typography variant="h6" gutterBottom>
              Weather Forecasts
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Plan ahead with detailed weather predictions
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box sx={homeStyles.buttonContainer}>
        <Button variant="contained" size="large" sx={homeStyles.primaryButton}>
          Get Started
        </Button>
        <Button variant="outlined" size="large">
          Learn More
        </Button>
      </Box>
    </Box>
  )
}

export default Home
export { Home as Component }