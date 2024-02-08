import { Button, Container, InputLabel, Link, Paper, Stack, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import theme from "../theme";
import Header from "../components/main/Header";
import { useAuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";

export default function CreateActtount() {
    const [userName, setuserName] = useState('')
    const [password, setPassword] = useState('')
    const [verifiedPassword, setverifiedPassword] = useState('')
    const [userData, setUserData] = useState( { 
        userName: '',
        password: '',
    } )

    const { createAccount, isAuthenticated, setIsAuthenticated } = useAuthContext()

    useEffect(() => {
        if(password.trim().length < 8 && verifiedPassword.trim().length < 8 && userName.trim()) {
            if (password === verifiedPassword) {
                setUserData({userName: userName, password: password})
                return setIsAuthenticated(true)
            }
        setIsAuthenticated(false)
        }
    },[password, verifiedPassword])
    console.log(isAuthenticated)


    return(
        <Container>
            <Header/>
            <Container>
                <Stack gap={4}>
                    <Stack>
                        <Typography variant="h5" fontWeight='bold' mb={1}>Create account</Typography>
                        <Typography variant="subtitle2" color={theme.palette.text.secondary}>Let’s get you started sharing your links!</Typography>
                    </Stack>
                    <Paper component='form' sx={{display:"flex", flexDirection: 'column', gap:3}}>
                        <Stack>
                            <InputLabel htmlFor='userName-input'>Username</InputLabel>
                            <TextField 
                                placeholder='e.g. alexf20'
                                id="userName-input"
                                sx={{'input::placeholder': {
                                    opacity: '0.6',
                                    color: '#333333',
                                    backgroundColor: 'none'
                                }}}
                                value={userName}
                                onChange={(e) => setuserName(e.target.value)}

                            />
                        </Stack>
                        <Stack>
                            <InputLabel htmlFor='password-input'>Create password</InputLabel>
                            <TextField 
                                placeholder='Enter your password'
                                id="password-input"
                                InputLabelProps={{sx:{backgroundColor:'tranparent'}}}
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Stack>
                        <Stack>
                            <InputLabel htmlFor='password-input'>Confirm password</InputLabel>
                            <TextField 
                                placeholder='Enter your password'
                                id="password-input"
                                InputLabelProps={{sx:{backgroundColor:'tranparent'}}}
                                type="password"
                                value={verifiedPassword}
                                onChange={(e) => setverifiedPassword(e.target.value)}
                            />
                        </Stack>
                        <Typography variant="caption">Password must contain at least 8 characters</Typography>
                        <Button onClick={() => createAccount(userData)} disabled={!isAuthenticated}>Create Account</Button>
                        <Stack alignItems='center' justifyContent='center'>
                            <Typography variant="caption" color={theme.palette.text.secondary}>Already have an account?</Typography>
                            <NavLink to='/login' style={{textDecoration: 'none'}}>
                                <Link>Login</Link>
                            </NavLink>
                        </Stack>                
                    </Paper>
                </Stack>
            </Container>
        </Container>
    )
}