import './App.css'
import Resgister from './components/Register'
import FocusInput from './components/FucusInput'
import CrudExample from './components/CrudExample'
import NumberGame from './components/NumberGame'
import Timer from './components/Timer'

function App() {

  return (
    <>
    <Timer />
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
