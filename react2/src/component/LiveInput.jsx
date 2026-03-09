import {useState} from "react";
const LiveInput=()=>{

    const [txt, setText] = useState("");

    return(
        <div style={{padding:'20px'}}>
            <h2>실시간 입력창</h2>
            <input type='text' placeholder='무엇이든 입력하세요' style={{fontSize:'16px',padding:'5px'}}
            value={txt} onChange={(e)=>{setText(e.target.value)}}/>
            <p>입력값 : <strong>{txt}</strong></p>
        </div>
    )
}

export default LiveInput;