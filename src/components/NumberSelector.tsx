import "./NumberSelector.css";
import decreseBtn from "../assets/images/icon-minus.svg";
import increseBtn from "../assets/images/icon-plus.svg";

type Props = {
	itemNumber: number;
	onDecreaseNumber: () => void;
	onIncreaseNumber: () => void;
};

const NumberSelector = ({
	itemNumber,
	onDecreaseNumber,
	onIncreaseNumber,
}: Props) => {
	return (
		<div className="number-selector">
			<button
				className="number-selector__minus-btn"
				aria-label="decrease number to add to cart"
				onClick={() => onDecreaseNumber()}
			>
				<img src={decreseBtn} alt="" />
			</button>
			<span className="number-selector__number">{itemNumber}</span>
			<button
				className="number-selector__plus-btn"
				aria-label="increase number to add to cart"
				onClick={() => {
					onIncreaseNumber();
				}}
			>
				<img src={increseBtn} alt="" />
			</button>
		</div>
	);
};

export default NumberSelector;
