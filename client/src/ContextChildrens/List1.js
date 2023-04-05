import { Component } from "react";
import style from "./list.module.css";
import { ThemeContext } from "../ContextApi/ThemeContextProvider";

class List1 extends Component{
     static contextType=ThemeContext;
  
     red="red";//suppose red=this.state.red  not reevaluated  again
    //** */  However, if a value is calculated outside of the render() method, it will not be re-evaluated automatically when the state changes.

     render(){
         // console.log(this.context);
         const {isLightTheme,light,dark}=this.context;
         const theme=isLightTheme?light:dark;
         const styleChange={...style.default,fontSize:"2rem",color:theme.syntax}//spreading default classs object unique to a particular compoennt.
       
        return( 
        <div className={style.listStyle} style={{backgroundColor:theme.ui}}>
            <li className={style.liStyle} style={styleChange}>Apple of List 2</li>
            <li className={style.liStyle}>{this.red}</li>
            <li className={style.liStyle}>Apple of List 2</li>
        </div>)
    }
}

export default List1;

// here className will be unique and to apply css to compoent