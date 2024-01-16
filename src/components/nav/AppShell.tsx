import { Box } from "@mui/material";
import Header from "../main/Header";
import { Outlet } from "react-router-dom";

export default function AppShell() {
    return (
        <Box sx={{height:'100vh'}}>
                <Header/>
             <Box>
                <Outlet />
             </Box>
        </Box>
    )
}