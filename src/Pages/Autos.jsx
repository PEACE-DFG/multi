import {useState} from 'react'
import {useEffect} from 'react'
import axios from "axios"
import Mauto from '../Component/Mauto';
function Autos() {
    const [products,setProducts]=useState([]);
    function fetchData(){
        axios.get('https://dummyjson.com/products/category/automotive')
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
<Mauto
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

export default Autos