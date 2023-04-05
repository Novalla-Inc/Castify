type FullProps = {
	className?: string;
	children?: React.ReactNode;
};

function Full({ ...props }: FullProps) {
	return (
		<div className={`w-full h-full ${props.className}`}>{props.children}</div>
	);
}

export default Full;
