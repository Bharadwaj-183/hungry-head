import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import React , { useContext , useState } from "react";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
import Checkout from "./checkout";

const Cart = (props) =>{
    const [isCheckout , setIsCheckout] = useState(false);
    const [isSubmitting , setIsSubmititng] = useState(false);
    const [didSubmit , setDidSubmit] = useState(false);
    const cartCtx = useContext(CartContext);
    const totalAmount = "$"+ cartCtx.totalAmount.toFixed(2);
    const hasItems = cartCtx.items.length > 0;  
    const cartItemRemoveHandler = (id) =>{cartCtx.removeItem(id)};
    const cartItemAddHandler = (item) => {cartCtx.addItem({...item , amount : 1})};
    const cartitems = 
    (   <ul className = {classes['cart-items']}> 
    {   cartCtx.items.map(
         (item) => 
        <CartItem 
        key = {item.id}
        name = {item.name}
        amount = {item.amount}
        price = {item.price} 
        onRemove = {cartItemRemoveHandler.bind(null , item.id)}
        onAdd = {cartItemAddHandler.bind(null , item)}
        />)
    } </ul>)

    const orderHandler = (event) =>{
        
        setIsCheckout(true);
    }

    const buttons = <div className = {classes.actions}>
    <button className = {classes['button--alt']}  onClick = {props.onClose}>Close</button>
    {hasItems && <button className = {classes.button}  onClick = {orderHandler}> Order</button>}
</div>

    const submitOrderHandler = async (userData) =>{
        setIsSubmititng(true);
        await fetch("https://react-http-c2e42-default-rtdb.firebaseio.com/orders.json" ,{
            method: "POST" , 
            body :JSON.stringify({
                user : userData , 
                orderedItems : cartCtx.items
            })
        } );
        setIsSubmititng(false)
        setDidSubmit(true);
        cartCtx.clearCart();
    }

    const cartModalContents = <React.Fragment>
        {cartitems}
        <div className = {classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        { isCheckout && <Checkout onConfirm = {submitOrderHandler} cancelHandler = {props.onClose}/>}
        {!isCheckout && buttons}
    </React.Fragment>

    const isSubmittingModalContent = <div><p>Sending the order</p></div>
    const submittedModalContent = <div>Order Submitted successfully</div>
    return <Modal onClose = {props.onClose}>
            {!isSubmitting  && !didSubmit && cartModalContents}
            {!didSubmit && isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && submittedModalContent}
        </Modal>
}

export default Cart;