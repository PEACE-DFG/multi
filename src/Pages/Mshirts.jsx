import {useState} from 'react'
import {useEffect} from 'react'
import Mshirt from "../Component/Mshirt";
import axios from "axios"

function Mshirts() {
    const [products,setProducts]=useState([]);
    function fetchData(){
        axios.get('https://dummyjson.com/products/category/mens-shirts')
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
    <Mshirt
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

export default Mshirts