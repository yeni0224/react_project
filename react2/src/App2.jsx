import './App.css'
import Count from "./component/Count";
import Light from "./component/Light";
import ChangeColor from "./component/ChangeColor";
import LiveInput from './component/LiveInput';

const App2 = () =>{

    return(
        <>
        <LiveInput />
        <hr />
        <ChangeColor />
        <hr />
        <Light />
        <Count value={100}/>
        </>
    )
}

export default App2