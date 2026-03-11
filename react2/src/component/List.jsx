//const fruits = ["apple", "grape", "banana"]
//주어진 과일 목록을 버튼으로 출력하고
//클릭하면 콘솔에 과일 이름이 출력되게 컴포넌트를 작성하시오.
// 컴포넌트의 이름은 List

const List = () => {
    const fruits = ["apple", "grape", "banana"]

    const onClickFruits = (e) =>{
        console.log(e.target.innerHTML);//시작태그와 종료 태그 사이의 값을 가져올 것
    }

    return(
        <div>
            {fruits.map((fruit, index)=>{
                return <button key={index} onClick ={onClickFruits}>{fruit}</button>
                })}
        </div>        
    )
}

export default List;