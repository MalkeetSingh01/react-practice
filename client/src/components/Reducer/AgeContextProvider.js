import { createContext, useReducer } from "react";

export const AgeContext=createContext();

const ageReducer=(state,action)=>{
    switch (action.type) {
        case 'ADD_ONE':    
            return state+1;
        case 'Minus_FIVE':    
            return state-5;
        case 'ADD_NUM':    
            return state+action.num;
            //num ==payload
        case 'Fact':
            return state+factorial(action.num);
        default:
            return state;
    }
}
const factorial=(num)=>{
    if(num==1)return 1;
    return num*factorial(num-1);
}

const AgeContextProvider = (props) => {

    const [age,dispatch]=useReducer(ageReducer,20);

    return ( 
        <AgeContext.Provider value={{age,dispatch}}>
            {props.children}
        </AgeContext.Provider>
     );
}
 
export default AgeContextProvider;