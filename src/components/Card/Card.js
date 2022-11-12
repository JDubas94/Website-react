import React from "react";
import styles from "./Card.module.scss";

function Card(props) {
  const [isAdded, setisAdded] = React.useState(false);

  const onClickPlus = () => {
    setisAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onClickFavorite}>
        <img src="/image/heart.svg" alt="Unliked" />
      </div>
      <img width={250} height={333} src={props.imageUrl} alt="Dress" />
      <h5>{props.title}</h5>
      <span>Price:</span>
      <b>{props.price}$</b>
      <img
        className={styles.plus}
        onClick={onClickPlus}
        src={isAdded ? "/image/btn-checked.svg" : "/image/btn-plus.svg"}
        alt="Plus"
      />
    </div>
  );
}
export default Card;
