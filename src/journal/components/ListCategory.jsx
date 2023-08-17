import { CheckBox } from "@mui/icons-material";
import { Grid, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { ItemCategory } from "./ItemCategory";

export const ListCategory = ({ categorys }) => {


  return (

    <List>
            { 
                categorys.map( c => (
                  <ItemCategory key={ c.id } c={c} />
                ))
            }

    </List>
  )

}
