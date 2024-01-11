import { createTheme } from "@mui/material";

 const theme = createTheme({
    palette: {
        text: {
            primary: "#333",
            secondary: "#737373"
        },
        background: {
            default: "#FAFAFA"
        }
    },
    typography: {
        fontFamily: [
            'InstrumentalSans',
            'Poppins',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        allVariants: {
            userSelect: 'none'
        }
    }
})

export default theme