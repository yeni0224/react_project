const FormExample=()=>{
    const handlerSubmit = (e)=>{
        e.preventDefault(); //submit 기능의 액션 지정 페이지 이동 막기
        alert(`비동기 통신 요청`);
        //비동기 통신으로 서버에 데이터 전송
        //결과 받아와서 현재 화면 업데이트
    }
    return(
        <form onSubmit={handlerSubmit}>{/*이벤트 연결*/}
            <input  type='text' name='text1'/>
            <button type="submit">제출</button>
        </form>
    )
}
export default FormExample;