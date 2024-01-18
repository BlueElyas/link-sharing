import { Box } from "@mui/material";
import Header from "../main/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "../main/NavBar";

export default function AppShell() {
    const [testLogin, setTestLogin] = useState<Boolean>(true)
    return (
        <Box sx={{height:'100vh'}}>
                {testLogin ? <NavBar/> : <Header/>}
             <Box>
                <Outlet />
             </Box>
        </Box>
    )
}