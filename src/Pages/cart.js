

export default function Cart(props){
    if(props.cartItems.length==0){
        return <div className="emptyCart">
            <h3>Your Cart is Empty</h3>
            </div>
    }else{
        return(
            <div className="productsWrapper">
                {
                    
                    props.cartItems.map((item)=>{
                        return (
                        <div className="card">
                        <img className="img" src={item.image} alt="product_image"/>
                        <div>{item.title}</div>
                        <div>{item.price}</div>
                        <button className="remove-btn" onClick={()=>props.handleRem(item)}>Remove From Cart</button>
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}




