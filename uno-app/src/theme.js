// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
  },
  colors: {
    primary: '#007BFF',
    secondary: '#6C757D',
    success: '#28A745',
    warning: '#FFC107',
    danger: '#DC3545',
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '8px',
        fontWeight: 'bold',
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 'bold',
        marginBottom: '1rem',
      },
    },
  },
});

export default theme;
