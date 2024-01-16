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
        },
        subtitle2: {
            fontWeight: 500,
        }
    },
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    backgroundColor: "#FAFAFA",
                    color: '#333333',
                    fontSize: '14px',
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    border: '#D9D9D9',
                    boxShadow: 'none',
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                        padding: '0px'
                    }     
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    color: '#FFFFFF',
                    backgroundColor: '#633CFF',
                    textTransform: 'none',
                    borderRadius: '8px',
                    ':hover' : {
                        boxShadow: '0px 0px 32px 0px rgba(99, 60, 255, 0.25)',
                        backgroundColor: '#BEADFF'
                    }
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none',
                    color: '#633CFF',
                    fontSize: '12px'
                }
            }
        }
    }
})

export default theme