import { createContext, useContext } from "react"
import { ThemeContext } from "./ThemeContext";

//1. Context 생성
const UserContext = createContext();

//2. 부모 컴포넌트(값 제공)
export const Parent=()=>{
    const user = {name:'scott', role:'admin'}
    return(<>
    {/*내 하위 트리에게 특정 값을 공급해주는 것, 
    context는 App.jsx에서 ThemeProvider에의해 제공됨*/}
    <UserContext.Provider value={user}>{/*usercontext로 감싸진 부분만 value를 받아옴*/}
        <Child />{/*누구에게 값을 넘겨줄 것인가*/}
    </UserContext.Provider>
    </>)
}

//3. 자식 컴포넌트(값 소비)
const Child=()=>{ //provider에 의해 제공받고있는 value 값을 받아올 것
    const user = useContext(UserContext);
    //App.jsx에서 ThemeContext 안에 Parent가 들어가있기 때문에 가능함
    const {theme} = useContext(ThemeContext); //여러 개의 context를 받아 쓸 수 있다
    return(<div style={{backgroundColor: theme ==='light'? '#ffffff': '#333',
        color: theme ==='light'? '#000': '#fff' }}>
        안녕하세요! {user.name}님! 역할:{user.role}
    </div>)
}