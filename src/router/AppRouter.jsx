import { Route, Routes } from "react-router-dom"
import { AuthRouter } from "../auth/routes/AuthRouter"
import { JournalPage } from "../journal/pages/JournalPage"


export const AppRouter = () => {
  return (

    <Routes>

        <Route path="/auth/*" element={ <AuthRouter/> }/>

        <Route path="/*" element={ <JournalPage/> }/>
        
    </Routes>
  )
}
