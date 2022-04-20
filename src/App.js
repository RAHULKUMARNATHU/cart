import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
        products:[
            {
                price: 9999,
                title: 'Mobile Phone',
                qty: 1,
                img:'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                id:1
            },
            {
                price: 999,
                title: 'Watch',
                qty: 3,
                img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
                id:2
            },
            {
                price: 979,
                title: 'Football',
                qty: 2,
                img:'https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
                id:3
            },
            {
                price: 59990,
                title: 'Laptop',
                qty: 5,
                img:'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
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

getCartCount = () => {
  const { products } = this.state;

  let count = 0;

  products.forEach((product) => {
    count += product.qty;
  })

  return count;
}

getCartTotal = ()=>{
  const {products} =this.state;

  let cartTotal = 0;

  products.map((product) =>{
    cartTotal = cartTotal + product.qty * product.price 
  })
  return cartTotal;

}
  
  render(){
    const {products} = this.state
   return (
    <div className="App">
    <Navbar count={this.getCartCount()} />
    <Cart
     products = {products}
     onIncreaseQuantity= {this.handleIncreaseQuantity}
     onDecreaseQuantity= {this.handleDecreaseQuantity}
     onDeleteProduct = {this.handleDeleteProduct}
      
      />
      <div style={{padding :10 , fontSize:20 }}>Total : {this.getCartTotal()}</div>
    </div>
  );
}
}



export default App;
