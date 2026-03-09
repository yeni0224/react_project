import React, { useState } from "react";
const Count = () =>{
    const [count, setCount] = useState(0);
    //화면이 리랜더링 되어도 현재 상태값 유지
    return(
        <>
        {/*값 사용*/}
        <h1>{count}</h1>
        {/*값 변경 직접 하지 않고 setter 사용*/}
        <button onClick={()=>setCount(count+1)}> + </button>
        <button onClick={()=>setCount(count-1)}> - </button>
        </>
    );
}

export default Count;