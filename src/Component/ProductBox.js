export default function ProductBox(props){

    function isContain(item){
        for(let i=0;i<props.cartItems.length;i++){
            if(props.cartItems[i].id===item.id)
            return true;
        }
        return false;
    }

    return(
        <div key={props.key} className="card"> 
            <img className="img" src={props.img} alt="product_image"/>
            <div>{props.title}</div>
            <div>{props.price}</div>


        {isContain(props.product)?
        <button className="Addedbtn">Added To Cart</button>
        :
        <button onClick={()=>props.handleAdd(props.product)} className="Addbtn">Add To Cart</button>
        }
        </div>
    )
}