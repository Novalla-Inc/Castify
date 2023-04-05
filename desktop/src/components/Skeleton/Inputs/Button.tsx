type ButtonProps = {
	text: string;
	className?: string;
	onClick?: () => void;
};

function Button({ ...props }: ButtonProps) {
	return (
		<button className={`p-4 ${props.className}`} onClick={props.onClick}>
			{props.text}
		</button>
	);
}

export default Button;
