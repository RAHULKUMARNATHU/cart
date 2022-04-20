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
    handleIncreaseQuantity = (product) =>{
        console.log("heyy plz increase the qty of",product);
       
        const {products} = this.state;
         const index = products.indexOf(product);
         products[index].qty += 1;

         this.setState({
             products : products
         })
    }


    handleDecreaseQuantity = (product) =>{
        console.log("heyy plz decrease the qty of",product);
         const {products} = this.state;
         const index = products.indexOf(product);

         if(products[index].qty === 1){
             return;
         } 
         products[index].qty -= 1;

         this.setState({
             products : products
         })
    }

    handleDeleteProduct = (id) =>{
        const {products} = this.state;

        const items  = products.filter((item)=> item.id !== id);//gives the another array which element not matched id value
        
        this.setState({
            products:items
        })
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
                   onIncreaseQuantity= {this.handleIncreaseQuantity}
                   onDecreaseQuantity= {this.handleDecreaseQuantity}
                   onDeleteProduct = {this.handleDeleteProduct}
                   
                   />
                   )
               })}               
            </div>
        )
    }
}

export default Cart;