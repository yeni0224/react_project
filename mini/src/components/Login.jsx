import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login=()=>{

    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const navigate = useNavigate();

    const checkLogin=()=>{
        if(!id || !pwd){
            alert(`로그인 실패 `)
            console.log(`id : ${id}, pwd : ${pwd}`)
        }
        else{
            sessionStorage.setItem('loginId', id);
            navigate(`/dashboard/${id}`);
        }
    }

    return(<>
    <span>아이디&nbsp;&nbsp;&nbsp;</span>
    <input value={id} type="text" onChange={(e)=>setId(e.target.value)}/><br />
    <span>비밀번호&nbsp;&nbsp;&nbsp;</span>
    <input value={pwd} type="password" onChange={(e)=>setPwd(e.target.value)}   /><br />
    <button onClick={checkLogin}>로그인</button>
    </>)
}
export default Login