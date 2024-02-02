import { 
    Container,
    InputAdornment, 
    InputLabel, 
    MenuItem, 
    Select, 
    Stack, 
    TextField, 
    Typography 
} from "@mui/material";
import {  ReactComponent as HamburderIcon } from '../../assets/images/icon-drag-and-drop.svg'
import { ReactComponent as LinkIcon } from '../../assets/images/icon-link.svg'
import theme from "../../theme";
import  data  from '../../data'
import { useLinkContext } from "../../context/LinkContext";

 
export default function SavedLink ( { linkValues } : any ) {
    const { platform, id, link } = linkValues
    const { removeLink } = useLinkContext()

    return(
        <Container sx={{backgroundColor: '#FAFAFA', borderRadius: '8px', padding: 2, width: '100%'}}>
            <Stack gap={3} >
                <Stack direction='row' alignItems='baseline' justifyContent='space-between'>
                    <Typography color={theme.palette.text.secondary} variant="subtitle2"><HamburderIcon/> Link #{id}</Typography>
                    <Typography color={theme.palette.text.secondary} sx={{opacity: 0.8, }} variant="body2">
                        <button  onClick={() => removeLink(id)}>Remove</button>
                    </Typography>
                </Stack>
                <Stack gap={3} draggable>
                            <Stack>
                                    <InputLabel id='select-platform-label'>Platform</InputLabel>
                                    <Select
                                        labelId="select-platform-label"
                                        id="select-platform"
                                        value={platform}
                                        onChange={() => {}}  
                                        sx={{backgroundColor: '#fff', display: 'flex', alignItems:'center', gap:3 }}    
                                        disabled={true}
                                    >
                                        {data.map(links => {
                                            return <MenuItem 
                                                        key={links.name}
                                                        value={links.name} 
                                                        sx={{backgroundColor: '#fff', display: 'flex', alignItems:'center', gap:3 }} 
                                                        dense
                                                    >
                                                            {<links.image/>}
                                                            {' '}
                                                            {links.name}
                                                    </MenuItem>
                                        })}
                                    </Select>
                            </Stack>

                        <Stack>
                            <InputLabel id='link'>Link</InputLabel>
                            <TextField
                                id="link"
                                value={link}
                                onChange={() => {}}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><LinkIcon/></InputAdornment>
                                }}
                            />
                        </Stack>
                    </Stack>
            </Stack>
        </Container> 
    )
}