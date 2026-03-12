import {Link, useParams} from 'react-router-dom'

const Notice=()=>{
    const {no} = useParams();
    const list = ['공지사항 1', '공지사항 2']

return(<><marquee>{list[no - 1]}</marquee></>)
}
export default Notice