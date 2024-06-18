import CartIcon from "../Cart/CartIcon.js";
import { useContext, useEffect , useState } from "react";
import classes from "./CartButton.module.css";
import CartContext from "../../store/CartContext";


const CartButton = props => {
    const [btnHighlight , setBtnHighlight] = useState(false);
    const CartCtx = useContext(CartContext);
    const numberOfItems = CartCtx.items.reduce(( curr , item)=>{
        return curr+item.amount ;
    } , 0);
    const btnClasses= `${classes.button} ${ btnHighlight ? classes.bump : "" }`;
    const {items} = CartCtx;
    useEffect(() => {
        if(items.length === 0){
            return;
        }
        setBtnHighlight(true);

        const timer = setTimeout(() => {
            setBtnHighlight(false);
        }, 300);
        return () =>{
            clearTimeout(timer);
        };
    } , [items])
    return  <button className ={btnClasses}  onClick = {props.onShow}>
        <span className = {classes.icon}><CartIcon /></span>
        <span>Your cart</span>
        <span className={classes.badge}>{numberOfItems}</span>
    </button>
}

export default CartButton;