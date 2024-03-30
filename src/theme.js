// import { createTheme } from '@mui/material/styles'
import { experimental_extendTheme as extendTheme} from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '58px'
  },

  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: {main: '#FFA500'},
    //     secondary: {main: '#6495ED'},
    //   },
    // },
    // dark: {
    //   palette: {
    //     primary: {main: '#A45A1F'},
    //     secondary: {main: '#4169E1'},
    //   },
    // }
  },

  //Đồng bộ theme components
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#DCDDE1',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'white',
            borderRadius: '8px'
          }
        }
      }
    },

    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: 'none',
          borderWidth: '1px',
          '&:hover': { borderWidth: 1 }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          //color: theme.palette.primary.main,
          fontSize: '0.875rem'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root: {
            //color: theme.palette.primary.main,
            fontSize: '0.875rem',
            // '.MuiOutlinedInput-notchedOutline': {
            //   borderColor: theme.palette.primary.light
            // },
            // '&:hover': {
            //   '.MuiOutlinedInput-notchedOutline': {
            //     borderColor: theme.palette.primary.main
            //   }
            // },
            '& fieldset': {borderWidth: '1px !important'},
            '&:hover fieldset': {borderWidth: '2px !important'},
            '&.Mui-focused fieldset': {borderWidth: '2px !important'},
        }
      }
    }
  }
})

export default theme