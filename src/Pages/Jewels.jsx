import Mjewel from "../Component/Mjewel";
import {useState} from 'react'
import {useEffect} from 'react'
import axios from "axios"

function Jewels() {
    const [products,setProducts]=useState([]);
    function fetchData(){
        axios.get('https://dummyjson.com/products/category/womens-jewellery')
        .then(res=>{
            setProducts(res.data.products)
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
         <div style={{ display:'flex',flexWrap:'wrap',justifyContent:'space-around' }} >
  {
products.length > 0 ? (
products.map((value, index) => {
const productWithQuantity = { ...value, quantity: 1 };
return (
  <div key={index} >
    <Mjewel
      id={productWithQuantity.id}
      brand={productWithQuantity.brand}
      description={productWithQuantity.description}
      title={productWithQuantity.title}
      img={productWithQuantity.images[0]}
      price={productWithQuantity.price}
      discount={productWithQuantity.discountPercentage}
      items={productWithQuantity}
    />
  </div>
);
})
) : (
<h5>Products Loading...</h5>
)
}

  </div> 
    </div>
  )
}

export default Jewels