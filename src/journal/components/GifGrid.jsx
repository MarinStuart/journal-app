import { useEffect } from "react"
import { getGifs } from "../helpers/getGifs";
import { useState } from "react";
import { ImageListItem } from "@mui/material";

export const GifGrid = ( { category } ) => {

  const [images, setimages] = useState([])

  const getImages = async() =>{
    const newImages = await getGifs( category );
    setimages( newImages );
  } 

    useEffect(() => {
      getImages();
    }, []);
  
   
    
  return (
    <>
      {
        images.map( img => (
          <ImageListItem key={img.id} sx={ { pt: "2px" } }>
            <img
                src={ img.url }
                alt={img.title}
                loading="lazy"
              />
            </ImageListItem>
        ) )
      }
    </>
  )
}
