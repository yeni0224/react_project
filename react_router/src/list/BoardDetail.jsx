import { posts } from "./data"
import { useParams } from "react-router-dom"

const BoardDetail=()=>{

    const {id} = useParams();
    const post = posts.find(p => p.id === parseInt(id))
    
    return(<div>
    <h2>게시글</h2>
    <p>{post?.content}</p>
    </div>)
}
export default BoardDetail