import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Board from './Board'
import Canvas from './Canvas'
import Timer from './Timer'

const DashBoard=()=>{
    
    const {id} = useParams();

    return(<>
    <h2>환영합니다 {id}님!</h2>
    <p>메뉴에서 기능을 선택하세요</p>
    <hr />
    {/*메뉴 출력*/}
    <Link to='timer' element={<Timer/>}>타이머</Link>&nbsp;&nbsp;&nbsp;
    <Link to='canvas' element={<Canvas/>}>캔버스</Link>&nbsp;&nbsp;&nbsp;
    <Link to='board' element={<Board/>}>보드</Link>
    <hr />
    </>)
}
export default DashBoard