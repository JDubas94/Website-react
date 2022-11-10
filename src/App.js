function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <h2>Cart</h2>

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

        <div className="dress">
          <div className="card">
            <div className="favorite">
              <img src="/image/heart.svg" alt="Unliked" />
            </div>
            <img width={250} height={333} src="image/Dress/1.png" alt="Dress" />
            <h5>Women's dress</h5>
            <span>Price:</span>
            <b>100$</b>
            <button className="button">
              <img width={11} height={11} src="image/plus.svg" alt="Plus" />
            </button>
          </div>
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
    </div>
  );
}

export default App;
