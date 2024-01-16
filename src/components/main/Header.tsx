import { Box, Container, Stack, Typography } from "@mui/material";
import SmallLogo from '../../assets/images/logo-devlinks-small.svg'

export default function Header() {
    return(
        <Container sx={{marginTop: 4}}>
            <Stack direction='row' alignItems='center' gap='5px'>
                <Box
                    component='img'
                    height='30px'
                    width='30px'
                    src={SmallLogo}
                />
                <Typography variant="h5" fontWeight='bold'>devlinks</Typography>
            </Stack>
        </Container>
    )
}