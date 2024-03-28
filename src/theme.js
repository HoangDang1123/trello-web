// import { createTheme } from '@mui/material/styles'
import { experimental_extendTheme as extendTheme} from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '52px',
    boardBarHeight: '58px'
  },

  colorSchemes: {
    light: {
      palette: {
        primary: {main: '#4169E1'},
        secondary: {main: '#FF5733'},
      },
      //spacing: (factor) => `${0.25 * factor}rem` // (Bootstrap strategy)
    },
    dark: {
      palette: {
        primary: {main: '#6495ED'},
        secondary: {main: '#FFA500'},
      },
      //spacing: (factor) => `${0.25 * factor}rem` // (Bootstrap strategy)
    }
  }
  // ...other properties
});

export default theme