const Button2 = () =>{
    const onClickButton2 = (name) =>{
        alert(`${name}님이 클릭하셨습니다.`)
    }
    const onChangeInput = (event) =>{
        console.log('입력값: '+ event.target.value)
    }
        const onChangeInput2 = (event, name) =>{
        console.log('입력값: '+ event.target.value)
        console.log('name: '+ name)
    }

    //매개변수가 있는 함수일 경우 이벤트가 발생하지 않아도 즉시 실행됨
    return(
        <>
        <button onClick={()=> {onClickButton2('김종로')}}>클릭2</button>
        <input onChange={onChangeInput}/>
        <input onChange={(e) => onChangeInput2(e, '김종로')}/>
        </>
    );
}

export default Button2;