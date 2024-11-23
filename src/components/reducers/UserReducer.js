import { ADD_USER } from "../actions/Useraction";
import { DELETE_USER,UPDATE_USER } from "../actions/Useraction";


const initialState = {
    users: [],
};

 const userReducer=(state=initialState,action)=>{
    console.log("selector",state);
    switch (action.type) {
        case ADD_USER:
            
           return{
            
            ...state,
            //user: ({...state.users,[action.name]:action.value})
            users:[...state.users,action.payload]
           }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload), 
            }
            case UPDATE_USER:
                return {
                    ...state,
                    users: state.users.map(user =>
                        user.id === action.payload.id ? { ...action.payload } : user
                    ),
                };
          
        
        default:
            return state;
          
    }
}


export default userReducer;