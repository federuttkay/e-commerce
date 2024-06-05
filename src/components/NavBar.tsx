import "./NavBar.css";
import logo from "../assets/images/logo.svg";
import iconCart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import menuOpen from "../assets/images/icon-menu.svg";
import menuClose from "../assets/images/icon-close.svg";
import Cart from "./Cart";
import { useEffect, useRef, useState } from "react";
import { useCartContext } from "../context/context";

const NavBar = () => {
	const menuItems = ["Collections", "Men", "Women", "About", "Contact"];
	const [isCartVisible, setIsCartVisible] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { cartItems } = useCartContext();

	const cartRef = useRef<HTMLDivElement>(null);
	const cartButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const closeCart = (event: MouseEvent) => {
			if (
				cartRef.current &&
				cartButtonRef.current &&
				event.target instanceof Node &&
				!cartRef.current.contains(event.target) &&
				!cartButtonRef.current.contains(event.target)
			)
				setIsCartVisible(false);
		};

		document.addEventListener("mousedown", closeCart);

		return () => {
			document.removeEventListener("mousedown", closeCart);
		};
	});

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
				{menuItems.map((item, index) => (
					<li className="nav__menu-item" key={index}>
						<a href="#">{item}</a>
					</li>
				))}
			</ul>
			<div className="nav__cart-and-user flex">
				<div className="nav__cart-group">
					<button
						onClick={() => setIsCartVisible(!isCartVisible)}
						className="nav__cart-and-user__button"
						ref={cartButtonRef}
					>
						<img className="cart-icon" src={iconCart} alt="shopping cart" />
						{cartItems.length !== 0 && (
							<span className="cart-number">
								{cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
							</span>
						)}
					</button>
					{isCartVisible && window.innerWidth > 900 && (
						<Cart cartRef={cartRef} />
					)}
				</div>
				<button className="nav__cart-and-user__button">
					<img className="profile-picture" src={avatar} alt="my profile" />
				</button>
			</div>
			{isCartVisible && window.innerWidth <= 900 && <Cart cartRef={cartRef} />}
		</nav>
	);
};

export default NavBar;
