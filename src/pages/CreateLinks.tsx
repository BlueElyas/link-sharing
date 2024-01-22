import { Button, Container, Stack, Typography } from "@mui/material";
import theme from "../theme";
import { ReactComponent as StartedIcon } from '../assets/images/illustration-empty.svg'
import { useState } from "react";
import AddedLink from "../components/CreateLinks/AddedLink";

export default function CreateLinks() {
    const [newLink, setNewLink] = useState(false)

    const handleNewLink = () => {
        setNewLink(true)
    }

    return(
        <Container sx={{backgroundColor: '#fff', paddingY: 2, borderRadius: '20px', height: '100vh'}}>
            <Stack gap={1}>
                <Stack mb={4}> 
                    <Typography variant="h5" fontWeight='bold' mb={1}>
                        Customize your links
                    </Typography>
                    <Typography variant="body2" color={theme.palette.text.secondary}>
                        Add/edit/remove links below and then share all your profiles with the world!
                    </Typography>
                </Stack>
                <Button variant="outlined" sx={{marginBottom: 2}} component='button' onClick={() => handleNewLink()}>+ Add new link</Button>
                {
                    newLink ? <AddedLink/> 
                    : 
                    <Stack sx={{backgroundColor: '#FAFAFA', paddingY: 2, borderRadius: '20px', textAlign: 'center'}} gap={2} mb={3}>
                        <StartedIcon/>
                        <Typography variant="h5" fontWeight='bold'>Let's get you started</Typography>
                        <Typography variant="body2" color={theme.palette.text.secondary}>
                            Use the “Add new link” button to get started. Once you have more than one link, 
                            you can reorder and edit them. We’re here to help you share your profiles with everyone!
                        </Typography>
                    </Stack>
                }
                <Stack position='relative' bottom={0}>
                    <Button sx={{justifySelf:'end'}}>Save</Button>
                </Stack>
            </Stack>
        </Container>
    )
}