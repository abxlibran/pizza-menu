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
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="listItemWrapper">
        {
          // We pass pizza obj in order to get all data of the pizza data array
          // We need to paas a unique key for performance optimization of React
          pizzaData.map((pizzaMenu) => <Pizza pizzaObj = {pizzaMenu} key = {pizzaMenu.name}/>)
        }
      </ul>
      {/* <Pizza
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
      /> */}
    </main>
  );
};

function Pizza(props) {
  return (
    <li className="pizzaWrapper">
      <img src={props.pizzaObj.photoName} alt="Pizza" />
      <h3>{props.pizzaObj.name}</h3>
      <span>{props.pizzaObj.ingredients}</span>
      <div>{props.pizzaObj.price + 3}</div>
      <div>{props.pizzaObj.soldOut}</div>
    </li>
  );
}

export default Menu;
