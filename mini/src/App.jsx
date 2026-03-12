import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Board from './components/Board'
import Canvas from './components/Canvas'
import DashBoard from './components/Dashboard'
import Login from './components/Login'
import Timer from './components/Timer'
import BoardDetail from './components/BoardDetail'
import Write from './components/Write'

function App() {

  return (
    <div>
      <BrowserRouter><Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard/:id' element={<DashBoard />}/>
        <Route path='/dashboard/:id/timer' element={<Timer />}/>
        <Route path='/dashboard/:id/canvas' element={<Canvas />}/>
        <Route path='/dashboard/:id/board' element={<Board />}/>
        <Route path='/dashboard/:id/board/write' element={<Write />}/>
        <Route path='/dashboard/:id/board/:postId' element={<BoardDetail />}/>
        </Routes></BrowserRouter>
    </div>
  )
}

export default App
