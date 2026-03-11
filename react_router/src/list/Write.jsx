const Write=()=>{
    return(<>
    <h2>글 작성하기</h2>
    <span>게시물 제목 : &nbsp;&nbsp;</span>
    <input type='text' id='title'/><br />
    <p>내용</p>
    <textarea rows='20' cols='60' id='paragraph' 
    placeholder="글을 작성하세요"></textarea>
    </>)
}
export default Write