// const Button = (props) =>{
//     console.log(props)
//     return <button style={{color:props.color}} //속성:객체.속성
//     >{props.text}-{props.color.toUpperCase()}</button>
// };

//구조분해 이용해 하나씩 받아오기, 기본값 지정 가능
const Button = ({text, color='blue', children}) =>{

    //이벤트 발생 시 수행할 작업(함수)
    const onClkickButton1 = (e) =>{ 
        console.log(e); console.log(text);
    }
    return<button onClick={onClkickButton1} 
        style={{color:color}}>{text} - {color.toUpperCase()}
        {children}
    </button>
}
export default Button;