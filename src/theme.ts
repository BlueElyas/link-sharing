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
                    backgroundColor: 'inherit'
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
                    minWidth: '40px',
                    ':hover' : {
                        boxShadow: '0px 0px 32px 0px rgba(99, 60, 255, 0.25)',
                        backgroundColor: '#BEADFF'
                    }
                },
                outlined: {
                    backgroundColor: '#fff',
                    border: '1px solid #633CFF',
                    padding: '5px 0px',
                },
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none',
                    color: '#633CFF',
                    fontSize: '12px',
                }
            }
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    boxSizing: 'border-box',
                    padding: '1em'
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#fff',
                    padding: '8px 16px',
                    position: "sticky"
                }
            }
        },
        
    }
})

export default theme