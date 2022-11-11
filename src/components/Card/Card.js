function Card(props) {
  const onClickButton = () => {
    alert();
  };
  return (
    <div className="card">
      <div className="favorite">
        <img src="/image/heart.svg" alt="Unliked" />
      </div>
      <img width={250} height={333} src={props.imageUrl} alt="Dress" />
      <h5>{props.title}</h5>
      <span>Price:</span>
      <b>{props.price}$</b>
      <button className="button" onClick={onClickButton}>
        <img width={11} height={11} src="image/plus.svg" alt="Plus" />
      </button>
    </div>
  );
}
export default Card;
