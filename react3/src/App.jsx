import './App.css'
import Resgister from './components/Register'
import FocusInput from './components/FucusInput'
import CrudExample from './components/CrudExample'
import NumberGame from './components/NumberGame'
import Timer from './components/Timer'
import {useState} from 'react'
import DrawingCanvas from './components/DrawingCanvas'
import HookCanvas from './components/HookCanvas'
import BatchTest from './components/BatchTest'
import PopupMenu from './components/PopupMenu'

function App() {
  const [show, setShow] = useState(true);
  return (
    <>
    <PopupMenu />
    <hr />
    <BatchTest />
    <hr />
    <p>Hook Canvas</p>
    <HookCanvas />
    <p>Drawing Canvas</p>
    <DrawingCanvas />
    <hr />
    <button onClick={() => setShow(!show)}>
        {show ? "타이머 제거" : "타이머 추가"}</button>
      {show && <Timer />}
    <hr />
    <NumberGame />
    <hr />
    <CrudExample />
    <hr />
    <FocusInput />
    <Resgister />
    </>
  )
}

export default App
