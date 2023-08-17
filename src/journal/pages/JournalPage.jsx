

import { JournalLayout } from "../layout/JournalLayout"
import { ImagenCategorysGifs } from "../views/ImagenCategorysGifs"
import { NothingSelectedView } from "../views"
import { useContext } from "react"
import { UserContext } from "../../context/userContext"


export const JournalPage = () => {

  const { categorys } = useContext( UserContext );


  if( categorys.length === 0 ){
    return ( 
      <JournalLayout>
        <NothingSelectedView />
      </JournalLayout>
     )
  }

  return (
    <JournalLayout>
        <ImagenCategorysGifs />
    </JournalLayout>
  )
}
