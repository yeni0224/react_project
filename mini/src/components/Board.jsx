import {useNavigate, Link, useParams} from 'react-router-dom';
import {postList} from './BoarData'
import BoardDetail from './BoardDetail';

//게시글 목록을 배열로 만든다, 클릭 시 상세 페이지 이동
const Board=()=>{

    const navi = useNavigate();
    const {id} =useParams();

    return(<>
    <h2>게시글 목록</h2>
    <ul type='None'>
        {postList.map((post)=>(<div key={post.id}>
            <Link to={`/dashboard/${id}/board/${post.id}`}
            element={<BoardDetail/>}>
            {post.title}</Link></div>))}<br />
    </ul>
    <button onClick={()=>{navi(`/dashboard/${id}/board/write`)}}>글쓰기</button><br />
    <button onClick={()=>{navi(-1)}}>뒤로 가기</button></>)
}
export default Board