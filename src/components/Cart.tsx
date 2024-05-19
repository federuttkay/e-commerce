import "./Cart.css";
import { Item } from "../App";

interface Props {
	cartItems: Item[];
}
const Cart = ({ cartItems }: Props) => {
	return (
		<div className="cart">
			<p className="cart__title">Cart</p>
			<div className="cart__items">
				{cartItems.map((item) => (
					<p>{item.id}</p>
				))}
			</div>
		</div>
	);
};

export default Cart;
