import { Box, Toolbar } from "@mui/material"
import { Navbar, SideBar } from "../components";


const drawerWitdth = 270;

export const JournalLayout = ( { children } ) => {

  return (
    <Box sx={ {display: "flex" }}>

        <Navbar drawerWitdth={ drawerWitdth } />

        <SideBar drawerWitdth={ drawerWitdth }/>

        <Box 
        component="main"
        sx={ { width:"510px", flexGrow:1, p: 3  } }
        >
            <Toolbar/>
            { children }
        </Box>
    </Box>
  )
}
