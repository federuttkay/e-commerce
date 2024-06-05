import { ReactNode } from "react";
import "./Button.css";

type Props = {
	children: ReactNode;
	onClick?: () => void;
};

const Button = ({ children, onClick }: Props) => {
	return (
		<button
			className="btn"
			onClick={() => {
				if (onClick) onClick();
			}}
		>
			{children}
		</button>
	);
};

export default Button;
