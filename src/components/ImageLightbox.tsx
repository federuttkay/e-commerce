import "./ImageLightbox.css";

type Props = {
	modalRef: React.RefObject<HTMLDialogElement>;
};

const ImageLightbox = ({ modalRef }: Props) => {

	return (
		<dialog ref={modalRef} className="image-modal">
			ImageLightbox
		</dialog>
	);
};

export default ImageLightbox;
