import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Product from './components/Product'
import Nav from './components/Nav'
import About from './components/About'
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Nav />}>
      <Route index element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
      <Route path='product' element={<Product />} />
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
