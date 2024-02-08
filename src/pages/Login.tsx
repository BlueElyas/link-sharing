import { Button, Container, InputLabel, Link, Paper, Stack, TextField, Typography } from "@mui/material";
import theme from "../theme";
import { NavLink } from "react-router-dom";
import Header from "../components/main/Header";
import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })
    const [inputValidated, setInputValidated] = useState(false)

    const {  login } = useAuthContext()

    useEffect(() => {
        if(password.trim().length > 8 && username.trim()) {
            setUserData({username: username, password: password})
            setInputValidated(true)
        }
    },[username, password])

    return(
        <Container>
            <Header/>
            <Container> 
                <Stack gap={4}>
                    <Stack>
                        <Typography variant="h5" fontWeight='bold' mb={1}>Login</Typography>
                        <Typography variant="subtitle2" color={theme.palette.text.secondary}>Add your details below to get back into the app</Typography>
                    </Stack>
                    <Paper component='form' sx={{display:"flex", flexDirection: 'column', gap:3}}>
                        <Stack>
                            <InputLabel htmlFor='userName-input'>Username</InputLabel>
                            <TextField 
                                placeholder='e.g. alexf14'
                                id="userName-input"
                                sx={{'input::placeholder': {
                                    opacity: '0.6',
                                    color: '#333333',
                                    backgroundColor: 'none'
                                }}}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Stack>
                        <Stack>
                            <InputLabel htmlFor='password-input'>Password</InputLabel>
                            <TextField 
                                placeholder='Enter your password'
                                id="password-input"
                                InputLabelProps={{sx:{backgroundColor:'tranparent'}}}
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Stack>
                        <Button onClick={() => login(userData)} disabled={!inputValidated}>Login</Button>
                        <Stack direction='row' alignItems='baseline' justifyContent='space-between'>
                            <Typography variant="caption" color={theme.palette.text.secondary}>Don't have an account?</Typography>
                            <NavLink to='/create-account' style={{textDecoration: 'none'}}>
                                <Link>Create account</Link>
                            </NavLink>
                        </Stack>                
                    </Paper>
                </Stack>
            </Container>
        </Container>
    )
}