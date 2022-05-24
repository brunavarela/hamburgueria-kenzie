import "./styles.css";

const Cart = ({ currentSale, removeItem, removeAll }) => {

  const totalPrice = currentSale.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <div className="container__cart">
      <div className="container__cart header">
        <h2>Carrinho de compras</h2>
      </div>

      <div className="container__cart div">

        <ul className="container__cart cartProduct">
          {currentSale.map((itemCart, indexCart) => (
            <li key={indexCart}>
              <div className="container__cart cartProduct--img">
                <img src={itemCart.img} alt={itemCart.img}/>
              </div>

              <div className="container__cart cartProduct--text">
                <h2>{itemCart.name}</h2>
                <p>{itemCart.category}</p>
              </div>

              <div className="container__cart cartProduct--button">
                <button onClick={() => removeItem(itemCart)}> Remover </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="container__cart footer">
        <div>
          <h3>Total</h3>
          <p>{totalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </p>
        </div>

        <button onClick={removeAll}>Remover todos</button>
      </div> 

     
    </div>
  );
};

export default Cart;
