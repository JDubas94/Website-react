import Card from "./components/Card";

function App() {
  return (
    <div className="wrapper">
      <div style={{ display: "none" }} className="overlay">
        <div className="drawer">
          <h2>
            Cart
            <img
              className="removeCartBtn"
              src="/image/btn-remove.svg"
              alt="Remove"
            />
          </h2>

          <div className="cartItem">
            <img
              width={250}
              height={350}
              src="/image/Dress/1.png"
              alt="Dresses"
            />
            <div>
              <p>Women`s dress</p>
              <b>100$</b>
            </div>
            <img
              className="removeBtn"
              src="/image/btn-remove.svg"
              alt="Remove"
            />
          </div>
          <div className="items"></div>
          <div className="cartTotalBlock">
            <ul>
              <li className="d">
                <span>Total:</span>
                <div></div>
                <b>100$</b>
              </li>
            </ul>
            <button>Checkout</button>
          </div>
        </div>
      </div>

      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/image/Dress.png" alt="Dress" />
          <div>
            <h3>React Dress</h3>
            <p>Stylish dress shop</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img width={18} height={18} src="/image/Basket.svg" alt="Basket" />
            <span>100$</span>
          </li>
          <li>
            <img width={18} height={18} src="/image/user.svg" alt="user" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>All Dress</h1>
        <div className="search-block">
          <img src="/image/search.svg" alt="Search" />
          <input placeholder="Search..." />
        </div>
      </div>

      <div className="dress">
        <Card />
        <div className="card">
          <img width={250} height={333} src="image/Dress/2.png" alt="Dress" />
          <h5>Women's dress</h5>
          <span>Price:</span>
          <b>100$</b>
          <button className="button">
            <img width={11} height={11} src="image/plus.svg" alt="Plus" />
          </button>
        </div>
        <div className="card">
          <img width={250} height={333} src="image/Dress/3.png" alt="Dress" />
          <h5>Women's dress</h5>
          <span>Price:</span>
          <b>100$</b>
          <button className="button">
            <img width={11} height={11} src="image/plus.svg" alt="Plus" />
          </button>
        </div>
        <div className="card">
          <img width={250} height={333} src="image/Dress/4.png" alt="Dress" />
          <h5>Women's dress</h5>
          <span>Price:</span>
          <b>100$</b>
          <button className="button">
            <img width={11} height={11} src="image/plus.svg" alt="Plus" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
