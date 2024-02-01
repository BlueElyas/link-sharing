import { Box } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import LinkProvider from "../../context/LinkContext";

export default function LoggedInShell() {
    return(
        <LinkProvider>
            <Box sx={{height: '100vh', margin: '2px 8px'}}>
                <NavBar/>
                <Box>
                    <Outlet/>
                </Box>
            </Box>
        </LinkProvider>
    )
}