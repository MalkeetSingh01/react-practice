import { useState } from "react";

const FormHandle=(props)=>{
    const [data,setData]=useState();
    const onChange=(value)=>{
        setData(value);
    }
    const handleForm=(e)=>{
        e.preventDefault();
        console.log(data+"--form");
        props.addSong(data);
    }
    return (
        <form  onSubmit={handleForm} >
            <input name="song" onChange={(e)=>onChange(e.target.value)}/>
            {/* this arrow syntax crete a new func on every func call toredunce this we can use simple func syntax where react will sutomatically bind the event there in the call and we need not pass it explicitly and we can use debouncing or throttling to rducing func calls  /}
            {/* <input name={song} onChange={onChange}></input> */}
            <button type="submit">ADD</button>
        </form>
    )
}
export default FormHandle;