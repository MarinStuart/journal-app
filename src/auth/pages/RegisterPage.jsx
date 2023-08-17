import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, fabClasses } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../hooks/useForm"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"

const formData = {
    nombre: "",
    correo: "",
    contraseña: "",
}

const formValidations = {
    nombre: [ (value) => value.length >= 1, " El nombre es obligatorio " ],
    correo: [ (value) => value.includes( "@" ), " El correo es obligatorio " ],
    contraseña: [ (value) => value.length >= 4, " La contraseña debe de tener almenos 4 letras " ],
}

export const RegisterPage = () => {

    const { handleNewUser } = useContext( AuthContext );

    const [formSubmitted, setFormSubmitted] = useState(false);

    const { nombre, correo, contraseña, 
        onInputChange, onResetForm, formState, 
        isFormValid, nombreValid, contraseñaValid, correoValid 
    } = useForm( formData, formValidations );


    const handleSubmit = ( event ) =>{
        event.preventDefault();
        setFormSubmitted(true);
        if( !isFormValid )return
        handleNewUser( formState );
        onResetForm();
    }

  return (
    <AuthLayout  tittle="Register">
        <form onSubmit={ handleSubmit}>
            <Grid container sx={ { padding: 2 } } >

                <Grid item xs={ 12 } sx={ { mt:2 } } >
                    <TextField 
                    label="Nombre" 
                    type="text" 
                    placeholder="Stuart Marin"
                    fullWidth
                    name = "nombre"
                    value={ nombre }
                    onChange={ onInputChange }
                    error={ !!nombreValid && formSubmitted }
                    helperText = { nombreValid }
                    />

                </Grid>

                <Grid item xs={ 12 } sx={ { mt:2 } } >
                    <TextField 
                    label="Correo" 
                    type="email" 
                    placeholder="correo@cualquiercosa.com"
                    fullWidth
                    name="correo"
                    value={ correo }
                    onChange={ onInputChange }
                    error={ !!correoValid && formSubmitted }
                    helperText = { correoValid }
                    />

                </Grid>

                <Grid item xs={ 12 } sx={ { mt:2 } } >
                    <TextField 
                    label="Contraseña" 
                    type="password" 
                    placeholder="Contraseña"
                    fullWidth
                    name="contraseña"
                    value={ contraseña }
                    onChange={ onInputChange }
                    error={ !!contraseñaValid && formSubmitted }
                    helperText = { contraseñaValid }
                    />
                </Grid>

                <Grid 
                container 
                direction="row"
                justifyContent="center"
                spacing={ 2 } 
                sx={ { mb:2, mt:1 } }>

                    <Grid item xs={ 12 } sm={ 6 }  >
                        <Button 
                        variant="contained" 
                        type="submit" 
                        fullWidth>
                            Crear cuenta
                        </Button>
                    </Grid>

                </Grid>

                <Grid  container direction="row" justifyContent="end" pt={3}>
                    <Link component={ RouterLink } color="inherit" to="/auth/login">
                        Ya poseo una cuenta
                    </Link>
                </Grid>
            </Grid>

            </form>
    </AuthLayout>
  )
}
