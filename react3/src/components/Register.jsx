//useRef()
import {useState} from 'react';
import {useRef} from 'react';

const Resgister=()=>{
    //값이 변경되어도 리렌더링되지 않음.상태값 저장
    const refObj = useRef(0);
    const [renderCount,setRenderCount] = useState(0);

    let a = 10; //일반 변수는 렌더링 되면 초기화
    const increaseRef=()=>{
        refObj.current++; // ref값 변경
        a++;
        console.log(`refObj.curent : ${refObj.current}`)
        console.log(`변수 a : ${a}`)
    }
    const forceRender=()=>{setRenderCount((prev)=>prev+1)}//강제 리렌더링 발생
    //prev : 현재 상태값, 변수를 직접 사용하지X
    
    return(<>
    <p>useRef의 값 : {refObj.current}</p>
    <button onClick={increaseRef}>useRef값 증가</button>
    <button onClick={forceRender}>강제 리렌더링</button>
    </>);
}
export default Resgister;