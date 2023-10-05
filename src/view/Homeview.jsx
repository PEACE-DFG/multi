import Caro from '../Pages/Caro'
import Feature from '../Pages/Feature'
import Offered from '../Pages/Offered'
import Saved from '../Pages/Saved'
import Foot from '../Pages/foot'
function Homeview() {
  return (
    <div style={{ backgroundColor:'rgb(254,216,177,0.3)' }}>
         <Caro/>
      <Feature/>
      <Saved/>
      <Offered/>
      <Foot/>
    </div>
  )
}

export default Homeview