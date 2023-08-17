
import { useReducer } from "react"
import { authReducer } from "./AuthReducer";
import { AuthContext } from "./AuthContext";

const initialState = [
    {
        nombre: "Stuart Marin",
        correo: "stuart@outlook.com",
        contraseña: "stuart",
    }
]

export const AuthProvider = ( { children } ) => {

    const [userRegister, setUserRegister] = useReducer(authReducer, initialState);

    const handleNewUser = (newUser) =>{
        const action = {
          type: "Add_User",
          payload: newUser,
        }
        setUserRegister( action ); 
      }

  return (
    <AuthContext.Provider value ={
        {
            userRegister,
            handleNewUser,
        }
    }>
        { children }
    </AuthContext.Provider>
  )
}
