import "./Cart.css";
import { useCartContext } from "../context/context";
import CartItem from "./CartItem";
import Button from "./Button";
import shoePhoto from "../assets/images/image-product-1-thumbnail.jpg";
import { RefObject } from "react";

type Props = {
	cartRef: RefObject<HTMLDivElement>;
};

const Cart = ({ cartRef }: Props) => {
	const { cartItems } = useCartContext();

	return (
		<div className="cart" ref={cartRef}>
			<p className="cart__title">Cart</p>
			<div className="cart__items">
				{!cartItems.length && (
					<span className="empty-cart">Your cart is empty</span>
				)}
				{cartItems.map((item, index) => (
					<CartItem
						id={item.id}
						image={shoePhoto} // En producción la imagen sería tomada de la base de datos
						quantity={item.quantity}
						key={index}
					/>
				))}
			</div>

			{cartItems.length > 0 && (
				<div className="cart__checkout-btn">
					<Button>Checkout</Button>
				</div>
			)}
		</div>
	);
};

export default Cart;
