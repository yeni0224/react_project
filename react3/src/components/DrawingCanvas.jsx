import React, { useEffect, useRef } from "react";

const DrawingCanvas = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const isDrawing = useRef(false); // 상태 저장용 (리렌더링 필요 없음)

  useEffect(() => { //화면이 나온(렌더링이 된) 다음에 동작해야할 때 사용
    const canvas = canvasRef.current;
    canvas.width = 500;
    canvas.height = 400;
    canvas.style.border = "2px solid black";

    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round"; //끝을 둥글게 butt, square
    ctx.lineWidth = 3;
    ctx.strokeStyle = "blue";

    ctx.fillStyle='#ffffff';
    ctx.fillRect(0,0,canvas.width,canvas.height); //캔버스 배경 설정

    ctxRef.current = ctx;
  }, []);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const { offsetX, offsetY } = e.nativeEvent;
    ctxRef.current.beginPath(); //새로운 그림 시작
    ctxRef.current.moveTo(offsetX, offsetY); //pen를 해당 위치로 이동
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) return;
    const { offsetX, offsetY } = e.nativeEvent;
    ctxRef.current.lineTo(offsetX, offsetY); //다음 지점으로 선을 그림
    ctxRef.current.stroke(); //선을 화면에 출력
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
    ctxRef.current.closePath();//선 끝냄
  };

  const handleDownload = () =>{
    const image = canvasRef.current.toDataURL("image.jpeg");
    //태그를 직접 쓰지 않고 js로 링크를 만듦, <a>:HTML에서 하이퍼링크를 만드는 태그
    const link = document.createElement("a"); 
    link.href = image;
    link.download = 'drawing.jpeg';
    link.click(); //실제 다운로드 동작을 발생시킴
  }

  return (
    <>
    <canvas
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} /*캔버스를 벗어날 때도 종료*//>
    <button onClick={handleDownload}>다운로드</button> {/*트리거 발생*/}
    </>
  );
};

export default DrawingCanvas;
