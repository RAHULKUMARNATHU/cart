import React from "react";
import CartItem from "./CartItem";


class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products:[
                {
                    price: 9999,
                    title: 'Mobile Phone',
                    qty: 1,
                    img:'',
                    id:1
                },
                {
                    price: 999,
                    title: 'Watch',
                    qty: 3,
                    img:'',
                    id:2
                },
                {
                    price: 979,
                    title: 'Football',
                    qty: 2,
                    img:'',
                    id:3
                },
                {
                    price: 59990,
                    title: 'Laptop',
                    qty: 5,
                    img:'',
                    id:4
                }

            ]
        }
        // this.increaseQuantity=this.increaseQuantity.bind(this)
    }
    render(){
        const {products} = this.state;
        return(
            <div className="cart">
               {products.map((product) =>{
                   return (
                   <CartItem 
                   product={product} 
                   key={product.id}
                   
                   />
                   )
               })}               
            </div>
        )
    }
}

export default Cart;