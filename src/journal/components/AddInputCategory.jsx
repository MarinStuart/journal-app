import { Box, TextField } from "@mui/material"
import { useForm } from "../hooks/useForm"
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export const AddInputCategory = () => {

    const { handleNewCategory } = useContext( UserContext );

    const { category, onInputChange, onResetForm  } = useForm({
        category: "",
    });

    const handleSubmit = (event) =>{
        event.preventDefault();
        if( category.trim().length <= 1 )return;

        const newCategory = {
                category: category,
                done: true,
                id: new Date().getTime() * 2,
        }

        handleNewCategory( newCategory );
        onResetForm();
    }

  return (

    <Box component="form" onSubmit={handleSubmit}>
        <TextField
            placeholder="Filtra un nuevo Gif"
            fullWidth
            sx={ { backgroundColor: "white" } }
            name="category"
            value={category}
            onChange={ onInputChange }
        />
    </Box>
        
  )
}
