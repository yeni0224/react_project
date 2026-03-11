import { posts } from "./data"
import { useParams } from "react-router-dom"

const BoardDetail=()=>{

    const {id} = useParams();
    
    return(<div>
    <h2>게시글</h2>
    {/*링크에 있는 id와 일치하는 content를 출력 */}
    
    </div>)
}
export default BoardDetail