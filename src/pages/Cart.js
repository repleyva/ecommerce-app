import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import productData from "../assets/fake-data/products";
import Button from "../components/Button";
import Helmet from "../components/Helmet";
import numberWithCommas from "../utils/numberWithCommas";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);
  //console.log(productData.getCartItemsDetail(cartItems));
  const [cartProducts, setCartProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(productData.getCartItemsDetail(cartItems));
    // toma el array de cartItems y le pasas la funcion reductora
    // la cual toma la variable que irá incrementando (total) y le suma
    // la cantidad de cada item
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
    // toma el array de cartItems y le pasas la funcion reductora
    // la cual toma la variable que irá incrementando (total) y le suma
    // la multiplicacion de la cantidad de cada item con su respectivo precio
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
  }, [cartItems]);
	
  return (
    <Helmet title="Cart">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>You have {totalProducts} products in your cart</p>
            <div className="cart__info__txt__price">
              <span>into money:</span>{" "}
              <span>{numberWithCommas(Number(totalPrice))}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            <Button size="block">Order</Button>
            <Link to="/catalog">
              <Button size="block">Continue shopping</Button>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {/* {cartProducts.map((item, index) => (
            <CartItem item={item} key={index} />
          ))} */}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
