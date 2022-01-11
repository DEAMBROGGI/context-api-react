export const initialState = {
    arrayAxiosContext:[], // defino las props y sus estados iniciales
    textInput:"",
    search:""
}

export const actionTypes = { //defino los tipo de acciones a lanzar mediante dispatch y a ser escuchada mediante reducer
    ADD_ARRAY_CONTEXT:"ADD_ARRAY_CONTEXT",
    ADD_TEXT:"ADD_TEXT",
    SEARCH:"SEARCH"
   
}

const reducer =(state, action ) =>{ //defino el reducer con sus parametros state y actions

    console.log(action);

switch(action.type){ // defino como cada una de las acciones que se reciban van a afectar mis states
    
    case "ADD_ARRAY_CONTEXT":
        return{
            ...state,
            arrayAxiosContext: action.arrayAxiosContext
        }
        case "ADD_TEXT":
        return{
            ...state,
            textInput:action.textInput,       
        }
        case "SEARCH":
        return{
            ...state,
            search:action.search,       
        }  
                                                                  
        default: return state;
}
}
export default reducer