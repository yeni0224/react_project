import { useRef, useState } from "react"
import {useNavigate} from 'react-router-dom';

const Timer=()=>{
    const [seconds, setSeconds] = useState(0);
    const interval = useRef(null);
    const navi = useNavigate();

    const StartTimer=()=>{
        interval.current = null;
        interval.current = setInterval(()=>{setSeconds((prev)=>{return prev + 1})},1000);
        console.log('타이머 시작')
    }

    const StopTimer=()=>{
        clearInterval(interval.current);
        console.log('타이머 멈춤')
    }
    
    const ResetTimer=()=>{
        onStopTimer();
        setSeconds(0);
        interval.current = null;
        console.log('타이머 초기화')
    }

    return(<>
        <h2>타이머 : {seconds}초</h2>
        <button onClick={StartTimer}>타이머 시작</button>&nbsp;&nbsp;&nbsp;
        <button onClick={StopTimer}>타이머 멈춤</button>&nbsp;&nbsp;&nbsp;
        <button onClick={ResetTimer}>타이머 초기화</button><br /><br />
        <button onClick={()=>navi(-1)}>뒤로 가기</button>
    </>)
}
export default Timer