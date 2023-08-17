import { Button, Checkbox, Grid, ListItem, ListItemButton, ListItemText } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export const ItemCategory = ( { c } ) => {

  const { handleRemoveCategory, handleAvalibleCategory  } =  useContext( UserContext );
  


  return (
    <ListItem key={ c.id } disablePadding>
        <ListItemButton> 
            <Checkbox 
            defaultChecked 
            onClick={ () => handleAvalibleCategory(c.id)}
            />
            
            <Grid container>
                <ListItemText primary= { c.category } ></ListItemText>
            </Grid>
            <Button onClick={ () => handleRemoveCategory(c.id) } >
              <DeleteForeverIcon/>
            </Button>
        </ListItemButton>
    </ListItem>
  )

}
