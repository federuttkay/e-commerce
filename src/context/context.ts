import { createContext, useContext } from "react";
import { Item } from "../App";

type deleteItem = (id: number) => void;

export const CartContext = createContext<Item[] | undefined>(undefined);
export const DeleteItemContext = createContext<deleteItem | undefined>(
	undefined
);

export const useCartContext = () => {
	const cartItems = useContext(CartContext);
	const deleteItem = useContext(DeleteItemContext);

	if (!cartItems) throw new Error("Must use CartContext with useCartContext.");
	if (!deleteItem) throw new Error("Must use CartContext with useCartContext.");

	return { cartItems, deleteItem };
};
