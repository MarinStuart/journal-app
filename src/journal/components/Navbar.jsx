import  MenuOutlined  from "@mui/icons-material/MenuOutlined"
import { AppBar, Grid, Hidden, IconButton, Toolbar, Typography } from "@mui/material"
import CancelIcon from '@mui/icons-material/Cancel';
import { AddInputCategory } from "./AddInputCategory";




export const Navbar = ( { drawerWitdth = 240 } ) => {

  return (
    <AppBar 
    position="fixed"
    sx={{
        width: { sm: ` calc(100% - ${ drawerWitdth }px ) ` },
        ml: { sm: ` ${ drawerWitdth }px `}
    }}
    >
        <Toolbar>
            <IconButton
            color="inherit"
            edge="start"
            sx={ { mr:2, display: { sm: "none" }  } }
            >
                <MenuOutlined/>
            </IconButton>

            <Grid container direction="row" justifyContent="space-between" alignItems="center">

                <Grid item xs={ 5 } >
                        <Typography variant="h6" noWrap={false}  >
                            GifApp
                        </Typography>
                </Grid>

                <Hidden smDown>
                <Grid item xs={6} sx={ { overflow: "hidden", height: "44px", borderRadius: "20px"  } }>
                    <Grid  diretion="row" 
                    justifyContent="center" 
                    container spacing={ 2 } 
                    alignItems="center" 
                    >            
                        <Grid item xs={ 9 } >
                            <AddInputCategory   />
                        </Grid>
                    </Grid>
                </Grid>
                </Hidden>

                <Grid item xs={1}>
                    <Grid  container direction="row" justifyContent="end" >
                        
                        <IconButton color="error">
                            <CancelIcon></CancelIcon>
                        </IconButton>
                    </Grid>
                </Grid>
                
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
