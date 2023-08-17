import { useContext } from "react"
import { UserContext } from "../../context/userContext"
import { ImageList } from "@mui/material";
import { GifGrid } from "../components/GifGrid";
import { ImageListItem } from "@mui/material";

export const ImagenCategorysGifs = () => {

    const { categorys } = useContext( UserContext );

  return (
        <>
        <ImageList sx={{ width: "100%", height: 600 }} cols={3}  rowHeight={200}>

            {
                categorys.map( c => {
                    if( c.done === true ){
                        return <GifGrid key={ c.id } category={ c.category }/>
                    }else{
                        return;
                    }
                } )
            }
        </ImageList>
        </>
  )
}
