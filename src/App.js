import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
const Navbar = lazy(() => (import("./components/navbar/Navbar.js")))
const HomeLazy = lazy(() => (import("./components/home/Home.js")))
const Categories = lazy(() => (import("./components/categoreis/Categories.js")))
const Cart = lazy(() => (import("./components/cart/Cart.js")))

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<h2>loading..</h2>}>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomeLazy />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
