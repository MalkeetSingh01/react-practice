import { useContext } from "react"
import { ThemeContext } from "../ContextApi/ThemeContextProvider";

const List2=()=>{
   
    
    const style1={
        margin: '20px auto',
        width: '40vw',
        textAlign: 'center'
    }

    const style2={
        fontSize: '1.5rem',
        listStyle: 'none',
        textDecoration: 'none'
    }

    const {isLightTheme,light,dark}=useContext(ThemeContext);
    const theme=isLightTheme?light:dark;

    return (
        <div style={{...style1,backgroundColor:theme.ui}}>
            <li style={style2}>Mango of List 1</li>
            <li style={style2}>Mango of List 1</li>
            <li style={style2}>Mango of List 1</li>
        </div>
    )
}

export default List2;