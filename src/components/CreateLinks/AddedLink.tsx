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
import { useEffect, useState } from "react";
import  data  from '../../data'
import { useLinkContext } from "../../context/LinkContext";

 
export default function AddedLink() {
    const { setLinkItems, linkList } = useLinkContext()

    const [platform, setPlatform] = useState('')
    const [link, setLink] = useState('')
    const [linkVerified, setLinkVerified] = useState(false)
    
    useEffect(() => {
        const httpRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
        const validateUrl = httpRegex.test(link)
        console.log(validateUrl)
        if (validateUrl && platform) {
            setLinkVerified(true)
            setLinkItems( { 
                platform: platform,
                link: link,
                id: linkList.length
             } )
        }
    },[linkVerified, link, platform])
    


    return(
        <Container sx={{backgroundColor: '#FAFAFA', borderRadius: '8px', padding: 2, width: '100%', }}>
            <Stack gap={3} >
                <Stack direction='row' alignItems='baseline' justifyContent='space-between'>
                    <Typography color={theme.palette.text.secondary} variant="subtitle2"><HamburderIcon/> Link #{linkList.length}</Typography>
                    <Typography color={theme.palette.text.secondary} sx={{opacity: 0.8, }} variant="body2"> Remove</Typography>
                </Stack>
                <Stack gap={3} draggable>
                            <Stack>
                                    <InputLabel id='select-platform-label'>Platform</InputLabel>
                                    <Select
                                        labelId="select-platform-label"
                                        id="select-platform"
                                        value={platform}
                                        onChange={(e) => setPlatform(e.target.value)}  
                                        sx={{backgroundColor: '#fff', display: 'flex', alignItems:'center', gap:3 }}    
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
                                onChange={(e) => setLink(e.target.value)}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><LinkIcon/></InputAdornment>
                                }}
                                // onBlur={false}
                                />
                        </Stack>
                    </Stack>
            </Stack>
        </Container> 
    )
}