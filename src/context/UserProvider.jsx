import  { UserContext } from "./userContext"
import { useReducer } from "react"
import { categoryReducer } from "./categoryReducer"

//const initialState = [ "goku" ];

const initialState = [
  {
    category: "goku",
    done: true,
    id: new Date().getTime(),
  },
]

export const UserProvider = ( { children } ) => {

  //const [categorys, setCategorys] = useState(initialState);
  const [categorys, setCategorys] = useReducer(categoryReducer, initialState);

  const handleNewCategory = (newCategory) =>{
    const action = {
      type: "Add_Category",
      payload: newCategory,
    }
    setCategorys( action ); 
  }

  const handleRemoveCategory = ( idCategory ) =>{
    const action = {
      type: "Remove_Category",
      payload: idCategory,
    }

    setCategorys( action );
  }

  const handleAvalibleCategory = ( idCategory ) =>{
    const action = {
      type: "Available_Category",
      payload: idCategory,
    }

    setCategorys( action );
  }





  return (
    <UserContext.Provider value={ 
      { categorys, 
        handleNewCategory, 
        handleRemoveCategory, 
        handleAvalibleCategory,
       }}
    >
        { children }
    </UserContext.Provider>
  )
}
