import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([
    {
      title: "Dress women's Romashka",
      price: 200,
      imageUrl: "/image/Dress/2.jpg",
    },
    {
      title: "Dress women's CityStyle",
      price: 100,
      imageUrl: "/image/Dress/1.jpg",
    },
    {
      title: "Dress women's Mod",
      price: 150,
      imageUrl: "/image/Dress/3.jpg",
    },
    {
      title: "Dress women's Original ",
      price: 280,
      imageUrl: "/image/Dress/4.jpg",
    },
    {
      title: "Dress women's Fashion ",
      price: 300,
      imageUrl: "/image/Dress/5.jpg",
    },
    {
      title: "Dress women's Vogue ",
      price: 100,
      imageUrl: "/image/Dress/6.jpg",
    },
    {
      title: "Dress women's Mod",
      price: 270,
      imageUrl: "/image/Dress/7.jpg",
    },
    {
      title: "Dress women's Original",
      price: 190,
      imageUrl: "/image/Dress/8.jpg",
    },
  ]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://636fb4b1f2ed5cb047e35ecb.mockapi.io/Items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  });

  return (
    <div className="wrapper">
      {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <h1>All Dress</h1>
        <div className="search-block">
          <img src="/image/search.svg" alt="Search" />
          <input placeholder="Search..." />
        </div>
      </div>

      <div className="dress">
        {items.map((obj) => (
          <Card
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
            onClickFavorite={() => console.log("Added to bookmarks")}
            onPlus={() => console.log("Pressed plus")}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
