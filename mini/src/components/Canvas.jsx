import { useEffect, useRef } from "react"
import {useNavigate} from 'react-router-dom'

const Canvas=()=>{

    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const bMouseDown = useRef(false);
    const navi = useNavigate();

    useEffect(()=>{
        const canvas = canvasRef.current;
        canvas.width = 600;
        canvas.height = 600;
        canvas.style.border = "4px solid black";

        const context = canvas.getContext("2d");
        context.lineCap = "round";
        context.lineWidth = 3;
        context.strokeStyle = "green";
        context.fillStyle='#ffffff';
        context.fillRect(0, 0, canvas.width, canvas.height)

        contextRef.current = context
    },[])

    const handleMouseDown=(e)=>{
        bMouseDown.current = true;
        const{offsetX, offsetY} = e.nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX,offsetY);
    }
    const handleMouseMove=(e)=>{
        if(!bMouseDown.current) return;
        const{offsetX, offsetY} = e.nativeEvent;
        contextRef.current.lineTo(offsetX,offsetY);
        contextRef.current.stroke();
    }
    const handleMouseUp=()=>{
        bMouseDown.current = false;
        contextRef.current.closePath();
    }
    const downloadImg=()=>{
        const img = canvasRef.current.toDataURL("YourDrawing image");
        const link = document.createElement("a");
        link.href = img
        link.download = 'drawing.jpeg'
        link.click();
    }
    return(<>
    <canvas ref={canvasRef}
    onMouseDown={handleMouseDown} onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseUp} onMouseUp={handleMouseUp}></canvas><br /><br />
    <button onClick={downloadImg}>다운로드</button><br />
    <button onClick={()=>{navi(- 1)}}>뒤로 가기</button>
    </>)
}
export default Canvas