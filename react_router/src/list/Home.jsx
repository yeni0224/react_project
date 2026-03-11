import {Link} from 'react-router-dom'
const Home=()=>{
    return(<>
    <h1>React 게시판</h1>
    <p>React Router 미니 프로젝트</p>
    <Link to='/board'>게시판 가기</Link>&nbsp;&nbsp;&nbsp;
    <Link to='/write'>글쓰기 가기</Link>
    </>)
}
export default Home