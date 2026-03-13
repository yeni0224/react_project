import { createContext, useContext } from "react";
 
const divsContext = createContext();
 
export function Sub1 (){
 
    const divs = {color:'red'};
   
    return (
    <div style={{border: '10px solid green'}}>
        Hello world!!
        {/*provider의 value에는 객체 전달*/}
        <divsContext.Provider value={divs}>
        <Sub2 />
        </divsContext.Provider>
        <Sub3 />
    </div>);
}
 function Sub2 (){
    const divs = useContext(divsContext);
    return (<div style={divs}>{/*js 코드를 가져다쓰겠다는 {}*/}
        Hello world!!
    </div>);
}
 function Sub3 (){
    const divs = useContext(divsContext);
    return (<div style={divs}>
        Hello world!!
    </div>);
}