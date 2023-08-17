
export const authReducer = ( initialState = [], action ) =>{

    switch (action.type) {

        case "Add_User":
            
            return [ action.payload ,...initialState ];

            case "Available_Login":

            return initialState.map( user => {
                if( user.correo === action.payload.correo && user.contraseña === action.payload.contraseña) {
                    return true
                }
                return false
            } );
        
        default:

            return initialState;

    }
    
}