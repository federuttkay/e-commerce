import "./NavBar.css";
import logo from "../assets/images/logo.svg";
import iconCart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import menuOpen from "../assets/images/icon-menu.svg";
import menuClose from "../assets/images/icon-close.svg";
import Cart from "./Cart";
import { Item } from "../App";
import { useState } from "react";

interface Props {
	cartItems: Item[];
}

const NavBar = ({ cartItems }: Props) => {
	const menuItems = ["Collections", "Men", "Women", "About", "Contact"];
	const [isCartVisible, setIsCartVisible] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="nav flex">
			<div className="nav__toggle">
				<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? (
						<img src={menuClose} alt="close the menu" />
					) : (
						<img src={menuOpen} alt="open the menu" />
					)}
				</button>
			</div>
			<div className="nav__logo">
				<a href="#">
					<img src={logo} alt="brand logo, go home" />
				</a>
			</div>
			<ul className={"nav__menu-items flex" + (isMenuOpen ? " is-open" : "")}>
				{menuItems.map((item) => (
					<li className="nav__menu-item">
						<a href="#">{item}</a>
					</li>
				))}
			</ul>
			<div className="nav__cart-and-user flex">
				<div className="nav__cart-group">
					<button onClick={() => setIsCartVisible(!isCartVisible)}>
						<img className="cart-icon" src={iconCart} alt="shopping cart" />
						{cartItems.length !== 0 && (
							<span className="cart-number">
								{cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
							</span>
						)}
					</button>
					{isCartVisible && <Cart cartItems={cartItems} />}
				</div>
				<button>
					<img className="profile-picture" src={avatar} alt="my profile" />
				</button>
			</div>
		</nav>
	);
};

export default NavBar;
