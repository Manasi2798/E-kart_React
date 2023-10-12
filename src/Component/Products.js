import { useEffect, useState } from "react"
import axios from "axios"
import ProductBox from "./ProductBox";

export default function Products(props){
    let [products,setProducts]= useState([]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            setProducts(res.data);
        }).catch(error => {
            console.log(error)
          });
    },[])

    return(
        <div className="productsWrapper">
            {products.map((product)=>{
                    return <ProductBox key={product.id}
                                       product={product}
                                       img={product.image}
                                       title={product.title}
                                       price={product.price}
                                       handleAdd={props.handleAdd}
                                       cartItems={props.cartItems}
                                       />
            })}
        </div>
    )
}