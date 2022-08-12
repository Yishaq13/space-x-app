import { createTheme } from '@mui/material/styles'

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#000',
        },
        secondary: {
            main: '#fff',
        },
        background: {
            default: '#f5f5f5',
        },
    },
})

export default theme
