// import React, { useState, useEffect } from "react";
// import classes from "./MealsSummary.module.css";
// import Card from "../UI/Card";
// import MealItem from "./MealItem/MealItem.js";

// const AvailableMeals = () => {
//   const [meals, setMeals] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [HttpError, setHttpError] = useState();

//   // useEffect(()=>{
//   //   setIsLoading(true);
//   //   const loadedMeals = []
//   //   async function fetchMeals(){
//   //     const response = await fetch("https://react-http-c2e42-default-rtdb.firebaseio.com/meals.json");
//   //     const responseData = await  response.json();
//   //     if(!response.ok)
//   //     throw new Error("Cant fetch data");
//   //     for (const key in responseData){
//   //       loadedMeals.push(
//   //         {
//   //           id : key,
//   //           name : responseData[key].name ,
//   //           description : responseData[key].description,
//   //           price : responseData[key].price
//   //         }
//   //       )
//   //     }
//   //     setMeals(loadedMeals);
//   //     setIsLoading(false);
//   //   } ;

//   //     fetchMeals().catch((error) =>{
//   //       setIsLoading(false);
//   //     setHttpError(error.message);
//   //   });

//   // } ,[]);

//   // if (isLoading){
//   //   return <section className = {classes.MealsLoading}>
//   //     <p> Loading.....</p>
//   //   </section>
//   // }

//   // if (HttpError){
//   //   return <section className = {classes.MealsLoading}>
//   //   <p> {HttpError}</p>
//   // </section>
//   // }
//   meals = [
//     {
//       id: "m1",
//       name: "Pizza",
//       description: "Get varities of pizzas!!",
//       price: 22,
//     },
//     {
//       id: "m2",
//       name: "Sandwich",
//       description: "You will love it",
//       price: 12,
//     },
//     {
//       id: "m3",
//       name: "Frankie",
//       description: "Try it once",
//       price: 10,
//     },
//     {
//       id: "m4",
//       name: "Momos",
//       description: "Yes it is",
//       price: 12,
//     },
//   ];
//   const mealsList = meals.map((meal) => {
//     return (
//       <div>
//         <MealItem
//           key={meal.id}
//           id={meal.id}
//           name={meal.name}
//           description={meal.description}
//           price={meal.price}
//         ></MealItem>
//       </div>
//     );
//   });
//   return (
//     <React.Fragment>
//       <section className={classes.meals}></section>
//       <Card>
//         <ul>{mealsList}</ul>
//       </Card>
//     </React.Fragment>
//   );
// };

// export default AvailableMeals;

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
