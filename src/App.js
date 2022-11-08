function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/image/Dress.png" />
          <div className="headerInfo">
            <h3>React Dress</h3>
            <p>Stylish dress shop</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img width={18} height={18} src="/image/Basket.svg" />
            <span>100$</span>
          </li>
          <li>
            <img width={18} height={18} src="/image/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>All Dress</h1>
      </div>
    </div>
  );
}

export default App;
