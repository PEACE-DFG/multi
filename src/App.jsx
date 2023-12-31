import Homeview from './view/Homeview'
import { Route,Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Shoe from './Component/Shoe'
import Shirts from './Component/Shirts'
import Phone from './Component/Phone'
import Laptop from './Component/Laptop'
import Fragrance from './Component/Fragrance'
import Skin from './Component/Skin'
import Decor from './Component/Decor'
import Furniture from './Component/Furniture'
import Watch from './Component/Watch'
import Auto from './Component/Auto'
import Singleproducts from './Pages/Singleproducts'
import Cart from './Component/Cart'
import './main.css'
import Userdashboard from './Pages/Userdashboard'


function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Homeview/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/shoes' element={<Shoe/>}></Route>
      <Route path='/shirt' element={<Shirts/>}></Route>
      <Route path='/phones' element={<Phone/>}></Route>
      <Route path='/laptops' element={<Laptop/>}></Route>
      <Route path='/fragrances' element={<Fragrance/>}></Route>
      <Route path='/skincares' element={<Skin/>}></Route>
      <Route path='/home-decorations' element={<Decor/>}></Route>
      <Route path='/furnitures' element={<Furniture/>}></Route>
      <Route path='/watches' element={<Watch/>}></Route>
      <Route path='/automotives' element={<Auto/>}></Route>
      <Route path='/details/:productId' element={<Singleproducts/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path="/user_dashboard" element={<Userdashboard/>}></Route>
     </Routes>
    </div>
  )
}

export default App