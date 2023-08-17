import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"


export const LoginPage = () => {
  return (

    <AuthLayout tittle="Login">
         <form>
            <Grid container sx={ { padding: 2 } } >
                <Grid item xs={ 12 } sx={ { mt:2 } } >
                    <TextField 
                    label="Correo" 
                    type="email" 
                    placeholder="correo@cualquiercosa.com"
                    fullWidth
                    />

                </Grid>

                <Grid item xs={ 12 } sx={ { mt:2 } } >
                    <TextField 
                    label="Contraseña" 
                    type="password" 
                    placeholder="Contraseña"
                    fullWidth
                    />
                </Grid>

                <Grid container direction="row"justifyContent="center" spacing={ 2 } sx={ { mb:2, mt:1 } }>

                    <Grid item xs={ 12 } sm={ 5 } >
                        <Button variant="contained" fullWidth>
                            Login
                        </Button>
                    </Grid>

                </Grid>

                <Grid  container direction="row" justifyContent="end">
                    <Link component={ RouterLink } color="inherit" to="/auth/register">
                        Crear una cuenta
                    </Link>
                </Grid>
            </Grid>

            </form>
    </AuthLayout>
        
  )
}
