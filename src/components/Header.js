function Header(props) {
  return (
    <header>
      <div className="headerLeft">
        <img width={40} height={40} src="/image/Dress.png" alt="Dress" />
        <div>
          <h3>React Dress</h3>
          <p>Stylish dress shop</p>
        </div>
      </div>
      <ul className="headerRight">
        <li onClick={props.onClickCart}>
          <img width={18} height={18} src="/image/Basket.svg" alt="Basket" />
        </li>
        <li>
          <img width={18} height={18} src="/image/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}
export default Header;
