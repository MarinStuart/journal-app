
export const categoryReducer = ( initialState = [], action ) =>{

    switch (action.type) {
        case "Add_Category":
            
            return [ action.payload ,...initialState ];
        
        case "Remove_Category":

            return initialState.filter( categorys => categorys.id !== action.payload );

        case "Available_Category":

            return initialState.map( categorys => {
                if( categorys.id === action.payload ) {
                    return {
                        ...categorys,
                        done: !categorys.done, 
                    }
                }
                return categorys;
            } );

    
        default:

            return initialState;

    }
    
}