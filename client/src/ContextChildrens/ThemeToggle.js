import { Component } from "react";
import { ThemeContext } from "../ContextApi/ThemeContextProvider";

class ThemeToggle extends Component {
    static contextType=ThemeContext;
    render() { 
        const {toggleFunc}=this.context;

        return (
            <button onClick={toggleFunc}>Toggle UI</button>
        );
    }
}
 
export default ThemeToggle;