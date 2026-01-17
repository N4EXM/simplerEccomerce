import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProtectedRoute from './components/general/ProtectedRoute'
import ItemPage from './pages/itemPage'
import Dashboard from './pages/Dashboard'
import Cart from './pages/Cart'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Profile from './pages/Profile'
import MyProductsPage from './pages/MyProductsPage'
import NewProductPage from './pages/NewProductPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route
          path='/'
          element={
            <HomePage/>
          }
        />

        <Route
          path='/Item/:slug'
          element={
            <ItemPage/>
          }
        />

        {/* seller Dashboard */}
        <Route
          path='/user/Dashboard'
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }
        />

        {/* user cart */}
        <Route
          path='/Cart'
          element={
            <ProtectedRoute>
              <Cart/>
            </ProtectedRoute>
          }
        />

        {/* user products edit page */}
        <Route
          path='/user/MyProducts'
          element={
            <ProtectedRoute>
              <MyProductsPage/>
            </ProtectedRoute>
          }
        />

        <Route
          path='/user/MyProducts/NewProduct'
          element={
            <ProtectedRoute>
              <NewProductPage/>
            </ProtectedRoute>
          }
        />

        {/* user profile page */}
        <Route
          path='/user/profile'
          element={
            <ProtectedRoute>
              <Profile/>
            </ProtectedRoute>
          }
        />

        {/* Login page */}
        <Route
          path='/Login'
          element={
            <Login/>
          }
        />

        {/* register pag */}
        <Route
          path='/Register'
          element={
            <Register/>
          }
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
