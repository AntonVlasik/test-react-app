export const aboutStyles = {
  container: {},
  title: {
    textAlign: 'center' as const,
    mb: 4,
  },
  description: {
    textAlign: 'center' as const,
    mb: 6,
    fontSize: '1.125rem',
    color: 'text.secondary',
  },
  mainGrid: {
    display: 'grid',
    gap: 4,
    gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' },
    mb: 6,
  },
  featuresTitle: {
    mb: 3,
  },
  featuresGrid: {
    display: 'grid',
    gap: 3,
    gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
  },
  featureHeader: {
    display: 'flex',
    alignItems: 'center',
    mb: 2,
  },
  featureIcon: {
    color: 'primary.main',
  },
  featureTitle: {
    ml: 1,
  },
  techStackTitle: {
    gutterBottom: true,
  },
  techStackDescription: {
    color: 'text.secondary',
    mb: 2,
  },
  chipContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 1,
  },
  goalCard: {
    bgcolor: 'primary.main',
    color: 'primary.contrastText',
  },
  goalContent: {
    textAlign: 'center' as const,
    py: 4,
  },
  goalDescription: {
    maxWidth: '600px',
    mx: 'auto',
  },
}