function App() {
  return (
    <div className="wrapper">
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

        <div className="card">
          <img width={250} height={333} src="image/Dress/1.png" alt="Dress" />
          <p>Women's dress</p>
          <div>
            <div>
              <span>Price: </span>
              <b>100$</b>
            </div>
            <button>
              <img width={11} height={11} src="image/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
