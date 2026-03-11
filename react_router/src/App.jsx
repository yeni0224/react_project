import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import NotFound from './components/NotFound'
import Product from './components/Product'
import Menu from './components/Menu'
import Nav from './components/Nav'
import Product2 from './components/Product2'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Header><Menu /></Header><hr />
      <Nav /><hr />
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/product2' element={<Product2/>}></Route>
        
        <Route path='/product/:code/detail/:q' element={<Product/>}></Route>

        <Route path='*' element={<NotFound/>}></Route>
        </Routes></BrowserRouter>
    </div>
  )
}

export default App
