import { useContext } from "react"
import { ThemeContext } from "./ThemeContext";

const Home = ()=>{
    
    const {theme, themeToggle} = useContext(ThemeContext); //themeContext에서 받아올 값이다
    return(<div style={{backgroundColor: theme === 'light'? '#fff': '#333',
        color:theme === 'light'? '#333' : '#fff'}}>
            테마:{theme}<button onClick={themeToggle}>테마 전환</button>
    </div>)
}
export default Home