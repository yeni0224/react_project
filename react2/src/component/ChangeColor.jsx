import {useState} from "react";

//input 태그에 입력한 값으로 글씨 색과 배경색을 변경해보자
const ChangeColor=()=>{
    const [cssh1, setcssh1] = useState({color:"blue", backgroundColor:"grey"});
    const [color, setColor] = useState("black");
    const [bgcolor, setbgColor] = useState("white");

    //색상 유효한지 검사
    function isValidCssColor(color){
        const s = new Option().style;
        s.color = color; //유효한 색상이면 저장, 아니면 ''을 저장
        return s.color !== '';
    }

    const chColor = () =>{
        if(isValidCssColor(color) && isValidCssColor(bgcolor)){
            setcssh1({color:color, backgroundColor:bgcolor})
        }
        else{
            alert(`올바른 색상이 아님`)
        }
    }
    return (<>
    <h1 style={cssh1}>h1태그입니다.</h1>
    배경색 : <input value={bgcolor} onChange={(e)=>{setbgColor(e.target.value)}}/><br/>
    글자색 : <input value={color} onChange={(e)=>{chColor(e.target.value)}}/><br/>
    <button>h1 색상 변경</button>
    </>)
}

export default ChangeColor