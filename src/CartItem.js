import React from "react";

class CartItem extends React.Component{
    render(){
        return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.Image}/>

            </div>

            <div className="right-block">
                <div style={{fontSize: 25}}>Phone</div>
                <div style={{color:'#777'}}>Rs 999</div>
                <div style={{color:'#777'}}>Qty. :1</div>
            <div className="cart-item-actions">
            
            {/* Buttons */}
            <img alt="deccrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png"/>
            <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png"/>
            <img alt="delete" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1650349931~hmac=89a26ae9371fd660378734e6e15e5792"/>
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