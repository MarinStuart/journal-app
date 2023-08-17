import { Grid, Typography } from "@mui/material"
import GifBoxIcon from '@mui/icons-material/GifBox';



export const NothingSelectedView = () => {
  return (
    <Grid 
    container
    //spacing 0, para que no haya espacio entre los hijos
    spacing={ 0 }
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: "100vh", backgroundColor: "primary.main"  }}
    >
        <Grid item xs={12}>
            <GifBoxIcon sx={ { fontSize: 200, color: "white" } }/>
        </Grid>
        <Grid item xs={12}>
            <Typography color="white" variant="h5" > Seleccionar o Crear una Category  </Typography>
        </Grid>
    </Grid>
  )
}
