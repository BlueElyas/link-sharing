import { Button, Container, InputLabel, Link, Paper, Stack, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import theme from "../theme";

export default function CreateActtount() {
    return(
        <Container>
            <Stack gap={4}>
                <Stack>
                    <Typography variant="h5" fontWeight='bold' mb={1}>Create account</Typography>
                    <Typography variant="subtitle2" color={theme.palette.text.secondary}>Let’s get you started sharing your links!</Typography>
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
                        <InputLabel htmlFor='password-input'>Create password</InputLabel>
                        <TextField 
                            placeholder='Enter your password'
                            id="password-input"
                            InputLabelProps={{sx:{backgroundColor:'tranparent'}}}
                            type="password"
                        />
                    </Stack>
                    <Stack>
                        <InputLabel htmlFor='password-input'>Confirm password</InputLabel>
                        <TextField 
                            placeholder='Enter your password'
                            id="password-input"
                            InputLabelProps={{sx:{backgroundColor:'tranparent'}}}
                            type="password"
                        />
                    </Stack>
                    <Typography variant="caption">Password must contain at least 8 characters</Typography>
                    <Button>Login</Button>
                    <Stack alignItems='center' justifyContent='center'>
                        <Typography variant="caption" color={theme.palette.text.secondary}>Already have an account?</Typography>
                        <NavLink to='/' style={{textDecoration: 'none'}}>
                            <Link>Login</Link>
                        </NavLink>
                    </Stack>                
                </Paper>
            </Stack>
        </Container>
    )
}