import {Link} from 'react-router-dom'

//<a>대신 Link 사용
const Menu=()=>{
    return(<>
    <Link to="/">MAIN</Link>&nbsp;&nbsp;&nbsp;
    <Link to="/product">제품 상세 페이지1</Link>&nbsp;&nbsp;&nbsp;
    <Link to="/product2?code=a1&q=10">제품 상세 페이지2</Link>&nbsp;&nbsp;&nbsp;

    {/*/prodcut/:code/detail/:q  개발자간의 약속, App.jsx에서 정의해줘야함
    클론이 찍힌 곳은 고정적인 값,위치를 유지해야함*/}
    <Link to="/product/p1/detail/20">제품 1</Link>&nbsp;&nbsp;&nbsp;
    <Link to="/product/p2/detail/40">제품 2</Link>
    </>)
}
export default Menu