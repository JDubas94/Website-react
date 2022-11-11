function Drawer() {
  return (
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
          <img className="removeBtn" src="/image/btn-remove.svg" alt="Remove" />
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
  );
}
export default Drawer;
