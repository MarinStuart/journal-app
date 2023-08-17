import { Navigate, Route, Routes } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"

export const JournalRoutes = () => {
  return (
    <Routes>
        <Route to="/" element={ <JournalPage/> } />
        <Route to="/*" element= { <Navigate to="/"/>} />
    </Routes>
  )
}
