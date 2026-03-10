//DOM 객체와 useRef 연결
import {useRef} from 'react';

const FocusInput=()=>{
    const inputRef = useRef(null);
    const handlerClick=()=>{
        inputRef.current.focus();
    }
    return(<><div>
        <input ref={inputRef} type="text" placeholder="여기에 입력하세요"/>
        <button onClick={handlerClick}>입력창에 포커스</button>
        </div></>);
}
export default FocusInput;