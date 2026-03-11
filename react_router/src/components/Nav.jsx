import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Nav=()=>{
    const code = useRef();
    const navigate = useNavigate(); //hook을 이용한 방법

    const moveHandler=()=>{
        //작업 수행..
        navigate('/')// 로직으로 이동
        //navigate(-1) // 뒤로 가기
    }
    const searchHandler = ()=>{
        if(!code.current.value.trim()){alert('입력 안함'); return; }
        navigate(`/product/${code.current.value}/detail/100`) //로직으로 이동
    }
    return(<div>
        <button onClick={moveHandler}>네비게이션 사용</button>
        <input ref={code}/><button onClick={searchHandler}>검색</button>
    </div>)
}
export default Nav