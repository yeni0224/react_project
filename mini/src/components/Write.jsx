import { postList } from "./BoarData";
import { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
const Write=()=>{

    const [title, setTitle] = useState("");
    const [paragrah, setParagraph] = useState("");
    const navi = useNavigate();
    const {id} = useParams("");
    
    const submitTexts=(e)=>{
        e.preventDefault();
        
        const newPost ={
            id: '0' + postList.length + 1,
            title : title, content : paragrah
        }

        postList.push(newPost);

        setTitle("");
        setParagraph("");
        navi(`/dashboard/${id}/board`)
    }
    return(<>
    <span type="text">제목 : </span>
    <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="제목"/><br /><br />
    <textarea type='text' cols="60" rows="20" value={paragrah} onChange={(e)=>setParagraph(e.target.value)}
    placeholder="글을 작성하세요" /><br />
    <button onClick={submitTexts} type="submit">등록</button></>)
}
export default Write