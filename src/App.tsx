import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

export interface Item {
	id: number;
	quantity: number;
}

function App() {
	const [cartItems, setCartItems] = useState<Item[]>([
		{ id: 3, quantity: 1 },
		{ id: 7, quantity: 2 },
	]);
	return (
		<>
			<NavBar cartItems={cartItems} />
		</>
	);
}

export default App;
