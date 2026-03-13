//context, provider 선언
import { createContext, useState } from "react";
export const ThemeContext  = createContext();
export const ThemeProvider = ({children})=>{
 
    const [theme, setTheme] = useState('light');
    const themeToggle = ()=>{
        setTheme((prev) => (prev === 'light'? 'dark':'light'))
    }

    //provider을 통해 자식 컴포넌트에서 값을 사용할 수 있게 한다는 것이 목적
    //객체형태로 보내기 위해 {} 한번 더묶음
    return(<>
    <ThemeContext.Provider value={{theme, themeToggle, a:1}}>
        {children}
    </ThemeContext.Provider>
    </>)
}