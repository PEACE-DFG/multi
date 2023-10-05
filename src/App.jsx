import Homeview from './view/Homeview'
import { Route,Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'


function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Homeview/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
     </Routes>
    </div>
  )
}

export default App