import {Routes, Route} from 'react-router-dom'
import './App.css';
import Catalog from './pages/Catalog/Catalog'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
