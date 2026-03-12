import {useNavigate, useParams} from 'react-router-dom';
import {postList} from './BoarData'

const Board=()=>{

    const navi = useNavigate();
    //- 게시글 목록을 배열로 만든다, 클릭 시 상세 페이지 이동
    const {lists} = useParams();

    return(<>
    <h2>게시글 목록</h2>
    <ul type='None'>
        {/*{lists.map()}*/}
    </ul>
    <button onClick={()=>{navi(-1)}}>뒤로 가기</button></>)
}
export default Board