export const homeStyles = {
  container: {},
  
  title: {
    textAlign: 'center' as const,
    mb: 4,
  },

  subtitle: {
    textAlign: 'center' as const,
    mb: 6,
    color: 'text.secondary',
  },
  
  featureGrid: {
    display: 'grid',
    gap: 3,
    gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
    mb: 4,
  },

  featureCard: {
    textAlign: 'center' as const,
  },

  featureIcon: {
    fontSize: 48,
    color: 'primary.main',
    mb: 2,
  },

  buttonContainer: {
    textAlign: 'center' as const,
  },

  primaryButton: {
    mr: 2,
  },
}