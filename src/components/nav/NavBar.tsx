import { AppBar, Box, Button, Stack } from "@mui/material";
import SmallLogo from '../../assets/images/logo-devlinks-small.svg'
import { ReactComponent as HeadIcon } from '../../assets/images/icon-links-header.svg'
import { ReactComponent as UserIcon } from '../../assets/images/icon-profile-details-header.svg'
import { ReactComponent as EyeIcon } from '../../assets/images/icon-preview-header.svg'
import {  NavLink } from "react-router-dom";

export default function NavBar() {


    return(
        <AppBar>
            <Stack direction='row' justifyContent='space-between' alignItems='baseline'>
                <Box
                    component='img'
                    height='25px'
                    width='25px'
                    src={SmallLogo}
                />
                <Stack direction='row'> 
                    <NavLink to='/create-links' 
                        style={({isActive} ) => {
                            return {
                                padding: '9px 27px',
                                color: isActive ? '#633CFF' : '',
                                backgroundColor: isActive ? '#EFEBFF' : '',
                                borderRadius: '8px'
                            }
                        }}
                    >
                        <HeadIcon/>
                    </NavLink>
                    <NavLink to='profile' 
                                style={({isActive} ) => {
                                    return {
                                        padding: '9px 27px',
                                        color: isActive ? '#633CFF' : '',
                                        backgroundColor: isActive ? '#EFEBFF' : '',
                                        borderRadius: '8px'
                                    }
                                }}
                    >
                        <UserIcon/>
                    </NavLink>
                </Stack>
                <Button variant="outlined"><EyeIcon/></Button>
            </Stack>
        </AppBar>
    )
}