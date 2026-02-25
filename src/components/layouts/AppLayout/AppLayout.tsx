import { Container, Box } from '@mui/material'
import { Navigation } from 'src/components'
import { Outlet } from 'react-router-dom'
import { appLayoutStyles } from './AppLayout.styles'

function AppLayout() {
  return (
    <Box sx={appLayoutStyles.root}>
      <Navigation />
      
      <Container maxWidth="lg" sx={appLayoutStyles.container}>
        <Outlet />
      </Container>
    </Box>
  )
}

export default AppLayout