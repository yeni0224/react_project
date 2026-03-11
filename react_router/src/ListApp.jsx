import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'
import BoardList from './list/BoardList'
import BoardDetail from './list/BoardDetail'
import Home from './list/Home'
import Write from './list/Write'
 
function ListApp() {
  return (
<div className='App'> 
<BrowserRouter>
<Routes>
    {/* '/'요청시 Home 컴포넌트 출력*/}
    <Route path='/' element={<Home />}></Route>
	{/* '/board'요청시  BoardList  컴포넌트 출력*/}
    <Route path='/board' element={<BoardList />}></Route>
    {/* '/board/:id'요청시 BoardDetail  컴포넌트 출력*/}
    <Route path='/board/:id' element={<BoardDetail />}></Route>
	{/* '/write' 요청시 Write 컴포넌트 출력 */}
    <Route path='/write' element={<Write />}></Route>
<Route path='*' element={<NotFound/>}></Route>
</Routes></BrowserRouter>
</div>
  )
}
 
export default ListApp