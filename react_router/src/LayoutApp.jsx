import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SiteLayout from './layout/SiteLayout'
import Home from './layout/Home'
import Notice from './layout/Notice'
import Gallery from './layout/Gallery'
import NotFound from './components/NotFound'

function LayoutApp() {
  return (
<div className='App'> 
<BrowserRouter><Routes>
    <Route path='/site' element={<SiteLayout />}> {/*바깥쪽은 slash로 시작해야함*/}
    <Route index element={<Home />} />{/*index route : 기본 자식 페이지*/}
    <Route path='gallery.go' element={<Gallery />} /> {/*안쪽은 slash 없이 해야함*/}
    <Route path='notice/:no' element={<Notice />} />
    </Route>
    <Route path='*' element={<NotFound/>}></Route>
</Routes></BrowserRouter>
</div>
  )
}
 
export default LayoutApp