type InputProps = {
	/** The input type */
	type?: string;
	/** id */
	id?: string;
	/** The input placeholder */
	placeholder?: string;
	/** The input value */
	value?: string;
	/** Color */
	color?: 'red' | 'blue' | 'green';
	/** The input onChange */
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ ...props }: InputProps) {
	return (
		<div className="p-4 w-auto h-auto">
			<input
				className=""
				onChange={props.onChange}
				type={props.type}
				placeholder={props.placeholder}
			/>
		</div>
	);
}

function Select({ ...props }: InputProps) {
	return (
		<div className="p-4">
			<select className="p-4" id={props.id}>
				<option className="p-4">Mumble</option>
				<option className="p-4">Youtube</option>
				<option className="p-4">Facebook</option>
				<option className="p-4">Twitch</option>
			</select>
		</div>
	);
}

export { Select, Input };
