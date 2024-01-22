import { Container, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import {  ReactComponent as HamburderIcon } from '../../assets/images/icon-drag-and-drop.svg'
import { ReactComponent as LinkIcon } from '../../assets/images/icon-link.svg'
import theme from "../../theme";

export default function AddedLink() {
    return(
        <Container sx={{backgroundColor: '#FAFAFA', borderRadius: '8px', padding: 2, width: '100%', minHeight: '350px'}}>
            <Stack gap={3} >
                <Stack direction='row' alignItems='baseline' justifyContent='space-between'>
                    <Typography color={theme.palette.text.secondary} variant="subtitle2"><HamburderIcon/> Link #1</Typography>
                    <Typography color={theme.palette.text.secondary} sx={{opacity: 0.8, }} variant="body2">Remove</Typography>
                </Stack>
                <Stack>
                    <InputLabel id='select-platform'>Platform</InputLabel>
                    <Select
                        id="select-platform"
                        labelId="select-platform"
                    >
                        <MenuItem value='github'>Github</MenuItem>
                        <MenuItem value='youtube'>Youtube</MenuItem>
                        <MenuItem value='disney'>Disney</MenuItem>
                    </Select>
                    <InputLabel id='link'>Link</InputLabel>
                    <TextField
                        id="link"
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><LinkIcon/></InputAdornment>
                        }}
                    />
                </Stack>
            </Stack>
        </Container>
    )
}