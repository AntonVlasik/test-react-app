import { Typography, Box, Card, CardContent, Chip } from '@mui/material'
import { Code, Speed, Security, BugReport } from '@mui/icons-material'
import { aboutStyles } from './About.styles'

type TXFeature = {
  icon: React.ReactElement
  title: string
  description: string
}

const technologies = [
    'React 19.2',
    'TypeScript',
    'Vite 7',
    'Material UI',
    'TanStack Query',
    'React Router',
    'Axios',
    'Vitest',
];

function About() {
  const features: TXFeature[] = [
    {
      icon: <Speed sx={aboutStyles.featureIcon} />,
      title: 'Lightning Fast',
      description: 'Built with Vite 7 and SWC for maximum development speed and performance',
    },
    {
      icon: <Security sx={aboutStyles.featureIcon} />,
      title: 'Type Safe',
      description: 'Strict TypeScript configuration ensures code reliability and developer confidence',
    },
    {
      icon: <Code sx={aboutStyles.featureIcon} />,
      title: 'Modern Stack',
      description: 'Latest React 19 features with cutting-edge development tools and practices',
    },
    {
      icon: <BugReport sx={aboutStyles.featureIcon} />,
      title: 'Well Tested',
      description: 'Comprehensive testing setup with Vitest and React Testing Library',
    },
  ]

  return (
    <Box sx={aboutStyles.container}>
      <Typography variant="h2" component="h1" gutterBottom sx={aboutStyles.title}>
        About This Project
      </Typography>
      
      <Typography variant="body1" sx={aboutStyles.description}>
        A modern React weather application showcasing best practices with the latest web technologies.
        Built in February 2026 with a focus on performance, type safety, and developer experience.
      </Typography>

      <Box sx={aboutStyles.mainGrid}>
        <Box>
          <Typography variant="h4" gutterBottom sx={aboutStyles.featuresTitle}>
            Key Features
          </Typography>
          <Box sx={aboutStyles.featuresGrid}>
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent>
                  <Box sx={aboutStyles.featureHeader}>
                    {feature.icon}
                    <Typography variant="h6" sx={aboutStyles.featureTitle}>
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom={aboutStyles.techStackTitle.gutterBottom}>
              Tech Stack
            </Typography>
            <Typography variant="body2" sx={aboutStyles.techStackDescription}>
              Built with modern technologies for optimal performance
            </Typography>
            <Box sx={aboutStyles.chipContainer}>
              {technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  variant="outlined"
                  size="small"
                  color="primary"
                />
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Card sx={aboutStyles.goalCard}>
        <CardContent sx={aboutStyles.goalContent}>
          <Typography variant="h5" gutterBottom>
            Project Goals
          </Typography>
          <Typography variant="body1" sx={aboutStyles.goalDescription}>
            This project demonstrates modern React development patterns, including proper state management
            with TanStack Query, type-safe development with strict TypeScript, comprehensive testing strategies,
            and performant builds with Vite 7.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default About
export { About as Component }