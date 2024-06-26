import classes from './checkout.module.css';
import {useRef , useState } from "react";
const Checkout = (props) => {
    const [formInputsValidity , setFormInputsValidity] = useState({
        name : true , 
        street : true, 
        postalCode : true , 
        city : true 
    });
    const isEmpty  =(value) => value.trim().length === 0 ; 
    const isFiveChars = (value) => value.trim().length === 5;
    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName); 
        const enteredStreetIsValid = !isEmpty(enteredStreet); 
        const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode); 
        const enteredCityIsValid = !isEmpty(enteredCity); 

        setFormInputsValidity({
            name : enteredNameIsValid ,
            street : enteredStreetIsValid , 
            postalCode : enteredPostalCodeIsValid , 
            city : enteredCityIsValid
        });
        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalCodeIsValid &&enteredCityIsValid ;
    
        if(!formIsValid){
            return 
        }

        props.onConfirm({
            name : enteredName , 
            street : enteredStreet ,
            city : enteredCity  , 
            postalCode : enteredPostalCode
        })
};

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();


    const nameControlClasses = `${classes.control} ${formInputsValidity.name ? " " : classes.invalid }` ;
    const streetControlClasses = `${classes.control} ${formInputsValidity.street ? " " : classes.invalid }` ;
    const postalCodeControlClasses = `${classes.control} ${formInputsValidity.postalCode ? " " : classes.invalid }` ;
    const cityControlClasses = `${classes.control} ${formInputsValidity.city ? " " : classes.invalid }` ;

    return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref = {nameInputRef}/>
        {!formInputsValidity.name && <p> Entered name is not valid!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref = {streetInputRef} />
        {!formInputsValidity.street && <p> Entered street is not valid!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref = {postalCodeInputRef} />
        {!formInputsValidity.postalCode && <p> Entered postalcode is not valid!</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref = {cityInputRef} />
        {!formInputsValidity.city && <p> Entered city is not valid!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;