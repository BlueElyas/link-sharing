import { Box, Button, Container, FormControl, Stack, TextField, Typography } from "@mui/material";
import {ReactComponent as UploadIcon} from '../assets/images/icon-upload-image.svg'
import theme from "../theme";

export default function Profile() {
    return(
        <Container sx={{backgroundColor: '#fff'}}>
            <Stack gap={3}>
                <Stack gap={2} mb={3}>
                    <Typography variant="h5" fontWeight='bold' >Profile Details</Typography>
                    <Typography color={theme.palette.text.secondary} variant='body2'>Add your details to create a personal touch to your profile</Typography>
                </Stack>
                <Stack sx={{backgroundColor:'#FAFAFA', padding: 2, borderRadius: '10px'}} gap={3}>
                    <Typography color={theme.palette.text.secondary}>Profile picture</Typography>
                    <Stack sx={{ backgroundColor:'#EFEBFF', padding: '50px 20px', width:'60%', borderRadius:'12px', color:'#633CFF'}} alignItems='center'>
                        <UploadIcon/>
                        <Typography fontWeight='bold' variant='caption'>+ Upload Image</Typography>
                    </Stack>
                    <Typography color={theme.palette.text.secondary} variant='body2'>Image must be below 1024x1024px. Use PNG or JPG format</Typography>
                </Stack>
                <FormControl>
                    <Stack sx={{backgroundColor:'#FAFAFA', padding: 2, borderRadius: '10px', borderBottom: '0.5px solid #D9D9D9'}} gap={3} mb={5}>
                        <Stack>
                            <Box sx={{fontSize: '13px'}}>First Name *</Box>
                            <TextField
                                placeholder="Ben"
                                required
                            />
                        </Stack> 
                        <Stack>
                            <Box sx={{fontSize: '13px'}}>Last Name *</Box>
                            <TextField
                                placeholder="Ben"
                                required
                            />
                        </Stack>  
                        <Stack>
                            <Box sx={{fontSize: '13px'}}>Email</Box>
                            <TextField
                                type="email"
                                placeholder="Ben"
                            />
                        </Stack>                    
                    </Stack>
                    <Button variant='contained'>Save</Button>
                </FormControl>
            </Stack>
        </Container>
    )
}