import { useEffect, useRef, useState } from "react";
import "./ProductPage.css";
import NumberSelector from "./NumberSelector";
import Button from "./Button";
import ImageGallery from "./ImageGallery";

type ProductProps = {
	onAddToCart: (id: number, quantity: number) => void;
	id: number;
	brand: string;
	title: string;
	description: string;
	price: number;
	discount?: number;
};

const ProductPage = ({
	onAddToCart,
	id,
	brand,
	title,
	description,
	price,
	discount = 0,
}: ProductProps) => {
	const [itemNum, setItemNum] = useState(1);
	const [selectedImage, setSelectedImage] = useState(0);

	const handleDecreaseNumber = () => {
		if (itemNum) setItemNum((prev: number) => prev - 1);
	};

	const handleIncreaseNumber = () => {
		setItemNum((prev: number) => prev + 1);
	};

	const imageModalRef = useRef<HTMLDialogElement>(null);

	const handleOpenImgModal = () => {
		if (window.innerWidth > 900) imageModalRef.current?.showModal();
	};

	const handleCloseImgModal = () => {
		imageModalRef.current?.close();
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (imageModalRef.current && event.target === imageModalRef.current) {
				imageModalRef.current.close();
				console.log("closed");
			}
		};

		window.addEventListener("click", handleClickOutside);

		return () => {
			window.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<section className="product">
			<dialog ref={imageModalRef} className="image-modal">
				<button
					onClick={handleCloseImgModal}
					className="image-modal__close-btn"
					aria-label="close image gallery"
				>
					<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
						<path
							d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
							fill="#69707D"
							fillRule="evenodd"
						/>
					</svg>
				</button>
				<ImageGallery
					selectedImage={selectedImage}
					onSelectImage={(num) => setSelectedImage(num)}
					onClickMainImg={() => {}}
				/>
			</dialog>
			<div className="product__image-gallery">
				<ImageGallery
					selectedImage={selectedImage}
					onSelectImage={(num) => setSelectedImage(num)}
					onClickMainImg={handleOpenImgModal}
				/>
			</div>
			<div className="product__info-wrapper">
				<p className="product__brand">{brand}</p>
				<h1 className="product__title">{title}</h1>
				<p className="product__description">{description}</p>
				<div className="product__prices">
					<span className="product__current-price">
						${(price * (1 - discount)).toFixed(2)}
					</span>
					{discount > 0 && (
						<>
							<span className="product__discount">{discount * 100}%</span>
							<span className="product__original-price">
								${price.toFixed(2)}
							</span>
						</>
					)}
				</div>
				<div className="product__quantity-and-add">
					<NumberSelector
						itemNumber={itemNum}
						onDecreaseNumber={handleDecreaseNumber}
						onIncreaseNumber={handleIncreaseNumber}
					/>
					<Button onClick={() => onAddToCart(id, itemNum)}>
						<svg
							className="btn__cart-icon"
							width="22"
							height="20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
								fill="currentColor"
								fillRule="nonzero"
							/>
						</svg>
						<span>Add to cart</span>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default ProductPage;
