function Card() {
  return (
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
  );
}
export default Card;
