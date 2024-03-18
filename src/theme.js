// import { createTheme } from '@mui/material/styles'
import { experimental_extendTheme as extendTheme} from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {main: '#4169E1'},
        secondary: {main: '#FF5733'},
      }
    },
    dark: {
      palette: {
        primary: {main: '#6495ED'},
        secondary: {main: '#FFA500'},
      }
    }
  }
  // ...other properties
});

export default theme