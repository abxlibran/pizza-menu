import React from "react";
{
  /* Old way of using props  */
  /* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoname="pizzas/spinaci.jpg"
        // Price is passed as string here, we can convert it to number by entering Javascript mode like this {}
        price = {12}
      />
      <Pizza
        name="Mozerrla Pizza"
        ingredients="mozarella, spinach, and ricotta cheese"
        photoname="pizzas/funghi.jpg"
        price = {19}
      /> */
}

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const Menu = () => {
  const pizzass = pizzaData;
  const pizzasLength = pizzass.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* This is conditional rendering */}
      {/* We can use ternary operator than && operator for condition rendering */}
      {pizzasLength ? (
        // This below is react fragment
        // Sometimes we need key for react fragment, below is the syntax
        // <React.Fragment key = {"random"}>
        <>
          <p>Authentic Itialian cuisine</p>
          <ul className="pizzas">
            {/* Better way of using props using map method */}
            {
              // We pass pizza obj in order to get all data of the pizza data array
              // We need to paas a unique key for performance optimization of React
              pizzass.map((pizzaMenu) => (
                <Pizza pizzaObj={pizzaMenu} key={pizzaMenu.name} />
              ))
            }
          </ul>
          {/*</React.Fragment> */}
        </>
      ) : (
        <p>Menu not ready yet</p>
      )}
    </main>
  );
};

// We can desctructer props as well like this
function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt="Pizza" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {/* {!pizzaObj.soldOut ? <span>Sold Out</span> : <span>{pizzaObj.price + 3}</span>} */}
        {/* Conditional text rendering */}
        <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price + 3}</span>
      </div>
    </li>
  );
}
export default Menu;
