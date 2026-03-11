//버튼 클릭 이벤트
//light 값이 On 이면 Off로, off면 on으로 변경하는 함수로 리랜더링
//On이면 버튼 text가 "끄기" 아니라면 "켜기"
import React, {useState} from "react";
const Light = () => {
    const [light, setLightSate] = useState("Off");
    const ClickBtn = () => {
        setLightSate(light === 'On'?'Off':'On')
    }
    return(
        <>
        <h1>{light}</h1>
        <button onClick={ClickBtn}>
            {light === 'On'?'끄기':'켜기'}
            </button>
        </>
    );
}
export default Light;