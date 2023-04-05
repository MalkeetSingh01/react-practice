import { Component } from "react";
import { ThemeContext } from "../ContextApi/ThemeContextProvider";
import { AuthContext } from "../ContextApi/AuthContextProvider";


class List3 extends Component {
    
    render() { 
        return (
            <AuthContext.Consumer>
                {(authContext)=>{
                    
                    const {isAuthenticated,toggleAuthFunc}=authContext;

                    return(
                        <ThemeContext.Consumer>
                            {(themeContext)=>{
                                const {isLightTheme,light,dark}=themeContext;
                                const theme=isLightTheme?light:dark;
                                const style={
                                    width: '200px',
                                    backgroundColor: theme.syntax,
                                    color: theme.ui,
                                }

                                return(
                                    <div>
                                        {isAuthenticated?
                                           ( <div style={{...style}}>
                                                <h1 style={{color:style.color}}>List 3</h1>
                                            </div>)
                                            :
                                            (<h3>LogIn</h3>)
                                         }
                                    <button onClick={toggleAuthFunc}>LogIn</button>
                                    </div>
                                )
                            }}
                        </ThemeContext.Consumer>
                    )
                }}
            </AuthContext.Consumer>
        );
    }
}
 
export default List3;