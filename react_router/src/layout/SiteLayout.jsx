import moment from 'moment'
import { Link, Outlet } from 'react-router-dom';

//전체 레이아웃
const SiteLayout=()=>{
    const today = new Date();
    const formattedDate = moment(today).format('MMM DD');
    
    return(<table>
        <thead><tr><td><h2>{formattedDate}</h2></td></tr></thead>
        <tbody><tr><td>
            {/*링크 경로는 상대경로로 지정 - 현재 URL이 기준*/}
            <Link to='./'>홈</Link>&nbsp;&nbsp;
            <Link to='.gallery.go'>갤러리</Link>&nbsp;&nbsp;
            <Link to='.notice/'>공지사항</Link>
            </td></tr></tbody>
        <tr><td><Outlet /></td></tr>
    </table>)
}
export default SiteLayout