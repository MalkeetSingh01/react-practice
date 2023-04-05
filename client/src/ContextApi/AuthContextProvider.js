import { Component, createContext } from "react";

export const AuthContext=createContext();

class AuthContextProvider extends Component {
    constructor(props){
        super(props);
        this.toggleAuth = this.toggleAuth.bind(this);
    }
    state = { 
        isAuthenticated:false,        
     } 
    //  toggleAuth=()=>{
    //     this.setState({
    //         isAuthenticated:!this.state.isAuthenticated,
    //     })
    //  }
     // arraow func is used beacuse it bind itself to the lexiogrohaical scope it existes in

    toggleAuth(){
        this.setState(prev=>({
            isAuthenticated:!prev.isAuthenticated,
        }))
    }

    render() { 
        return (
            <AuthContext.Provider value={{...this.state,toggleAuthFunc:this.toggleAuth}}>
                {/* //can be passed as toggleAuthFunc:()=>this.toggleAuth()  best practice*/ }
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}
 
export default AuthContextProvider;