import { useState } from 'react';
import useCart from '../hooks/useCart';
import CartLineItem from './CartLineItem';

const Cart = () => {
  const [confirm, setConfirm] = useState(false);
  const { dispatch, REDUCER_ACTION, totalItems, totalPrice, cart } = useCart();

  const onSubmit = () => {
    dispatch({ type: REDUCER_ACTION.SUBMIT });
    setConfirm(true);
  };

  const pageContent = confirm ? (
    <h2>Thank you for your order</h2>
  ) : (
    <>
      <h2 className="offsceen">Cart</h2>
      <ul className="cart">
        {cart.map((item) => {
          return (
            <CartLineItem
              key={item.sku}
              item={item}
              dispatch={dispatch}
              REDUCER_ACTION={REDUCER_ACTION}
            />
          );
        })}
      </ul>
      <div className="cart__total">
      <p>Total Item: {totalItems}</p>
      <p>Total Price: {totalPrice}</p>
      <button className="submit" disabled={!totalItems} onClick={onSubmit}>Place Order</button>
      </div>
    </>
  );
 const content = (
    <main className="main main--cart">
        {pageContent}
    </main>
 )


  return content
};

export default Cart;
