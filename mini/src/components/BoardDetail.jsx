import {useParams, useNavigate} from 'react-router-dom';
import {postList} from './BoarData'

const BoardDetail=()=>{

    const navi = useNavigate();
    const {postId} =useParams();
    const post = postList.find(p => p.id === postId)

    return(<>
    <h2>게시글</h2>
    <div><span>제목 : </span>
    {post?.title}<br/><br/>
    {post?.content}</div><br/><br/>
    <button onClick={()=>{navi(-1)}}>뒤로 가기</button></>)
}
export default BoardDetail