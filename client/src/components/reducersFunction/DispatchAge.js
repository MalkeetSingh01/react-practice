import { Fragment, useContext } from "react";
import { AgeContext } from "../Reducer/AgeContextProvider";

const DispatchAge = () => {
    const {age,dispatch}=useContext(AgeContext);
    return ( 
        <Fragment>
            <h1>
                {age}
            </h1>
            <button onClick={()=>dispatch({type:'ADD_ONE'})}>ADD ONE</button>
            <button onClick={()=>dispatch({type:'Minus_FIVE'})}>Minus FIVE</button>
            <button onClick={()=>dispatch({type:'Fact',num:4})}>num+Fact #4</button>
        </Fragment>
     );
}
 
export default DispatchAge;