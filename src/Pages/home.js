import Products from "../Component/Products";


export default function Home(props){
    return(
        <div>
            <Products cartItems={props.cartItems}
                      handleAdd={props.handleAdd}
            />
        </div>
    )
}