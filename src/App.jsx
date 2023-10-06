import Homeview from './view/Homeview'
import { Route,Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Shoe from './Component/Shoe'
import Shirts from './Component/Shirts'


function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Homeview/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/shoes' element={<Shoe/>}></Route>
      <Route path='/shirt' element={<Shirts/>}></Route>
     </Routes>
    </div>
  )
}

export default App