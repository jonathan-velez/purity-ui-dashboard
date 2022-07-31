import { mode } from "@chakra-ui/theme-tools";

export const globalStyles = {
  colors: {
    gray: {
      700: '#1f2733',
    },
    teal: {
      200: '#4ec3e0',
      300: '#4ec3e0',
      400: '#4ec3e0',
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('gray.50', 'gray.800')(props),
        fontFamily: 'Helvetica, sans-serif',
      },
      html: {
        fontFamily: 'Helvetica, sans-serif',
      },
    }),
  },
};
