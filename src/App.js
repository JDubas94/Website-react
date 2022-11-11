import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    title: "Dress women's Romashka",
    price: 200,
    imageUrl: "/image/Dress/2.png",
  },
  {
    title: "Dress women's CityStyle",
    price: 100,
    imageUrl: "/image/Dress/1.png",
  },
  { title: "Dress women's Mod", price: 150, imageUrl: "/image/Dress/3.png" },
  {
    title: "Dress women's Original ",
    price: 100,
    imageUrl: "/image/Dress/4.png",
  },
];

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />

      <div className="content">
        <h1>All Dress</h1>
        <div className="search-block">
          <img src="/image/search.svg" alt="Search" />
          <input placeholder="Search..." />
        </div>
      </div>

      <div className="dress">
        {arr.map((obj) => (
          <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
        ))}
      </div>
    </div>
  );
}

export default App;
