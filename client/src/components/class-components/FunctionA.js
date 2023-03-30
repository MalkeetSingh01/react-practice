const FunctionA=(props)=>{
    return(<h2>Functional Clock ||| {props.date.toLocaleTimeString()} |||</h2>)
}
export default FunctionA;

//  In React, state is meant to be local or encapsulated, which means that it should be managed within the component that owns it and not directly accessible from other components.

// Neither the parent nor child components should know whether a certain component is stateful or stateless. They should only interact with the component through its props and not be concerned about its internal state management. This separation of concerns helps to keep the code more modular and easier to maintain.