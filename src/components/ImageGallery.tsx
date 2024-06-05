import "./ImageGallery.css";
import image1 from "../assets/images/image-product-1.jpg";
import image2 from "../assets/images/image-product-2.jpg";
import image3 from "../assets/images/image-product-3.jpg";
import image4 from "../assets/images/image-product-4.jpg";
import image1Small from "../assets/images/image-product-1-thumbnail.jpg";
import image2Small from "../assets/images/image-product-2-thumbnail.jpg";
import image3Small from "../assets/images/image-product-3-thumbnail.jpg";
import image4Small from "../assets/images/image-product-4-thumbnail.jpg";

const images = [image1, image2, image3, image4];
const imagesSmall = [image1Small, image2Small, image3Small, image4Small];

type Props = {
	selectedImage: number;
	onSelectImage: (num: number) => void;
	onClickMainImg: () => void;
};

const ImageGallery = ({
	selectedImage,
	onSelectImage,
	onClickMainImg,
}: Props) => {
	const handlePreviousImg = () => {
		if (selectedImage === 0) onSelectImage(images.length - 1);
		else onSelectImage(selectedImage - 1);
	};
	const handleNextImg = () => {
		if (selectedImage === images.length - 1) onSelectImage(0);
		else onSelectImage(selectedImage + 1);
	};

	return (
		<div className="image-gallery">
			<div className="image-gallery__main-img">
				<button
					onClick={() => handlePreviousImg()}
					className="gallery-btn left"
				>
					<svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M11 1 3 9l8 8"
							stroke="#1D2026"
							strokeWidth="5"
							fill="none"
							fillRule="evenodd"
						/>
					</svg>
				</button>
				<button onClick={() => handleNextImg()} className="gallery-btn right">
					<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
						<path
							d="m2 1 8 8-8 8"
							stroke="#1D2026"
							strokeWidth="5"
							fill="none"
							fillRule="evenodd"
						/>
					</svg>{" "}
				</button>
				<img
					src={images[selectedImage]}
					alt=""
					onClick={() => onClickMainImg()}
				/>
			</div>
			<div className="image-gallery__thumbnails">
				{imagesSmall.map((item, index) => (
					<div
						className={
							"image-gallery__thumbnail-img" +
							(selectedImage === index ? " selected-img" : "")
						}
						onClick={() => onSelectImage(index)}
						key={index}
					>
						<img src={item} alt="" className="image-gallery__thumbnail-imggg" />
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageGallery;
