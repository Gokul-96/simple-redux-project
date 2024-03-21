const initialState= {name: 'Gokul', age:27};

//state and action as argument in reducer
const addUserReducer=(state=initialState,action) =>{
    switch (action.type) {
        case "CHANGEUSERNAME" : {
            return { ...state, name: action.payload};
        }
        case "CHANGEUSERAGE" : {
            return { ...state, age: action.payload};
        }
        default:
            return state;
    }
        
    }
    export default addUserReducer;
