import { Button, Box, AppBar, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { navigationStyles } from './Navigation.styles'
import { Path } from 'src/router/path'

function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={navigationStyles.title}>
          Weather App 2026
        </Typography>
        <Box sx={navigationStyles.buttonContainer}>
          <NavLink to={Path.Home} style={navigationStyles.navLink}>
            {({ isActive }) => (
              <Button 
                color="inherit" 
                variant={isActive ? 'outlined' : 'text'}
                sx={navigationStyles.button}
              >
                Home
              </Button>
            )}
          </NavLink>
          <NavLink to={Path.About} style={navigationStyles.navLink}>
            {({ isActive }) => (
              <Button 
                color="inherit" 
                variant={isActive ? 'outlined' : 'text'}
                sx={navigationStyles.button}
              >
                About
              </Button>
            )}
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation