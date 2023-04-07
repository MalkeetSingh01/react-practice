import { useEffect, useState } from 'react';
import {v1} from 'uuid';
import FormHandle from './FormHandle';

const Uuid_State=()=>{
    const [songs, setSongs] = useState([]);
    const handle=(songName)=>{
        console.log(songName+"--list");
         setSongs([...songs,{name:songName,id:v1()}])
    }

    const [age,setAge]=useState(20);
    useEffect(()=>console.log("Component loaded"));

    useEffect(()=>console.log("Age changes"),[age]);

    useEffect(()=>console.log("Song Added"),[songs]);

    return(
        <>
        <table>
            <tbody>
        {songs.length ?
        (
            songs.map(song=>{
                return (
                    <tr key={song.id}>
                        <td>{song.name}</td>
                        <td>{song.id}</td>
                    </tr>
                )
            })
        ):
        (<tr>No Songs</tr>)
        }
        </tbody>
        </table>
        <FormHandle addSong={handle}/>
        <button onClick={()=>setAge(age+1)}>Click to add {age}</button>
        </>
    )
}
export default Uuid_State;