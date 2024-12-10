import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import ProductDetails from './components/main/ProductDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import CartPage from './pages/CartPage'
import Login from './auth/components/Login'
import WishList from './pages/WishList'
import { WishlistProvider } from './services/WishlistContext'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WishlistProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path='/cart-page' element={<CartPage />} />
            <Route path="/login" element={<Login />} />
            <Route path='/home' element={<Home/>}/>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </WishlistProvider>

    </>
  )
}

export default App
