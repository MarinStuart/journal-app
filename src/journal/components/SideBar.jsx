import { useContext } from "react"
import { UserContext } from "../../context/userContext";
import { Box, Divider, Drawer, Grid, Hidden,  Toolbar, Typography } from "@mui/material"
import { ListCategory } from "./ListCategory";


export const SideBar = ( { drawerWitdth = 240 } ) => {

    const   { categorys }   =  useContext( UserContext );

  return (

    <Hidden smDown>
    <Box 
     componen="nav"
     sx={ { width: { sm:  drawerWitdth, flexShrink: { sm:0 }  } } }
     >

        <Drawer 
        variant="permanent"
        open
        sx={ { display: { xs: "block" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWitdth  }
        } }
        >
          
        <Toolbar>

            <Grid item>
            <Typography  variant="h6" noWrap sx={ { fontSize:"30px" } }>
                Categorys 
            </Typography>
            
            </Grid>
        </Toolbar>

        <Divider/>
        
        <ListCategory categorys={ categorys }/>

        </Drawer>
        
       


     </Box>
    </Hidden>
     
  )
}
