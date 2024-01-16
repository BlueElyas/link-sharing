import { Button, Container, InputLabel, Link, Paper, Stack, TextField, Typography } from "@mui/material";
import theme from "../theme";

export default function Login() {
    return(
        <Container sx={{marginTop: 3 }}>
            <Stack gap={4}>
                <Stack>
                    <Typography variant="h5" fontWeight='bold' mb={1}>Login</Typography>
                    <Typography variant="subtitle2" color={theme.palette.text.secondary}>Add your details below to get back into the app</Typography>
                </Stack>
                <Paper component='form' sx={{display:"flex", flexDirection: 'column', gap:3}}>
                    <Stack>
                        <InputLabel htmlFor='email-input'>Email address</InputLabel>
                        <TextField 
                            placeholder='e.g. alex@email.com'
                            id="email-input"
                            sx={{'input::placeholder': {
                                opacity: '0.6',
                                color: '#333333',
                                backgroundColor: 'none'
                            }}}
                            type="email"
                        />
                    </Stack>
                    <Stack>
                        <InputLabel htmlFor='password-input'>Password</InputLabel>
                        <TextField 
                            placeholder='Enter your password'
                            id="password-input"
                            InputLabelProps={{sx:{backgroundColor:'tranparent'}}}
                            type="password"
                        />
                    </Stack>
                    <Button>Login</Button>
                    <Stack>
                        <Typography variant="caption" color={theme.palette.text.secondary}>Don't have an account?</Typography>
                        <Link>Create account</Link>
                    </Stack>
                    
                </Paper>
            </Stack>
        </Container>
    )
}