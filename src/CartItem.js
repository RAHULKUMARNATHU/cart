import React from "react";

class CartItem extends React.Component{
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img:''
        }
        // this.increaseQuantity=this.increaseQuantity.bind(this)
    }
    
    increaseQuantity=()=>{
        console.log("this.state" ,this.state)
    }
    
    
    render(){
        const {price , title ,qty} = this.state
        return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.Image}/>

            </div>

            <div className="right-block">
                <div style={{fontSize: 25}}>{title}</div>
                <div style={{color:'#777'}}>Rs: {price}</div>
                <div style={{color:'#777'}}>Qty: {qty}</div>
            <div className="cart-item-actions">
            
            {/* Buttons */}
            
            <img alt="increase"
             className="action-icons" 
             src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
             onClick={this.increaseQuantity}    /*to resolve the error::this.increaseQuantity.bind(this)*/
             />
             <img alt="deccrease" 
            className="action-icons" 
            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
            onClick={this.decreaseQuantity}
            />
            <img alt="delete" 
            className="action-icons" 
            src="https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1650349931~hmac=89a26ae9371fd660378734e6e15e5792"
            />
            </div>
            </div>
        </div>
        )}
}

const styles = {
    Image:{
        height:110,
        width:110,
        borderRadius:4
    }
}

export default CartItem;
