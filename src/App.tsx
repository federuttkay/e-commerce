import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { CartContext, DeleteItemContext } from "./context/context";
import ProductPage from "./components/ProductPage";
import { getProductInfo } from "./products";

export type Item = {
	id: number;
	quantity: number;
};

function App() {
	const [cartItems, setCartItems] = useState<Item[]>([
		{ id: 9, quantity: 1 },
		// { id: 12, quantity: 2 },
	]);

	const product1 = getProductInfo(9);

	const handleAddToCart = (id: number, quantity: number) => {
		const itemInCartIndex = cartItems.findIndex((item) => item.id === id);

		if (itemInCartIndex >= 0) {
			const itemInCart = cartItems[itemInCartIndex];
			const updatedItemInCart = {
				id,
				quantity: itemInCart.quantity + quantity,
			};

			const newCart = [...cartItems];
			newCart[itemInCartIndex] = updatedItemInCart;
			setCartItems(newCart);
		} else {
			setCartItems([...cartItems, { id, quantity }]);
		}
	};

	const handleRemoveFromCart = (id: number) => {
		setCartItems(cartItems.filter((item) => item.id !== id));
	};

	return (
		<>
			<CartContext.Provider value={cartItems}>
				<DeleteItemContext.Provider value={handleRemoveFromCart}>
					<NavBar />
					{product1 ? (
						<ProductPage onAddToCart={handleAddToCart} {...product1} />
					) : (
						<h2>Item not found</h2>
					)}
				</DeleteItemContext.Provider>
			</CartContext.Provider>
		</>
	);
}

export default App;
