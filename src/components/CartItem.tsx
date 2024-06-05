import "./CartItem.css";
import deleteBtn from "../assets/images/icon-delete.svg";
import { useCartContext } from "../context/context";
import { getProductInfo } from "../products";

type Props = {
	id: number;
	image: string;
	quantity: number;
};

const CartItem = ({ id, image, quantity }: Props) => {
	const { deleteItem } = useCartContext();
	const product = getProductInfo(id);

	if (product)
		return (
			<div className="cart-item">
				<img src={image} alt="" className="cart-item__image" />
				<div className="cart-item__description">
					<p className="cart-item__title">{product.title}</p>
					<p className="cart-item__prices">
						${(product.price * product.discount).toFixed(2)} x {quantity}{" "}
						<span className="cart-item__prices__total">
							${(product.price * product.discount * quantity).toFixed(2)}
						</span>
					</p>
				</div>
				<button
					className="cart-item__delete-btn"
					onClick={() => deleteItem(id)}
				>
					<img src={deleteBtn} alt="delete item" />
				</button>
			</div>
		);
};

export default CartItem;
