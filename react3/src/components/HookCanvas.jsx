import { useEffect, useRef, useState } from "react";

const HookCanvas = ()=>{
    const paper = useRef();
    const [pen, setPen] = useState(); // 2D context

    useEffect(() => { //canvas DOM 요소에서 2D 그리기 컨텍스트를 꺼내와서 pen 상태에 저장
        setPen(paper.current.getContext("2d")); // canvas DOM
    }, []);

    return (
        <canvas
            onClick={(e) => {
                pen.fillRect( 
                    e.nativeEvent.offsetX - 25,
                    e.nativeEvent.offsetY - 25,
                    50,
                    50 //내가 클릭한 지점을 중앙으로 한 사각형 그리기
                );
            }}
            ref={paper}
            width={300}
            height={300}
            style={{ border: "black solid 2px" }}
        />
    );


};
export default HookCanvas;
