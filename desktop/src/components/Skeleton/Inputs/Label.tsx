type FormLabelProps = {
	/** The label text */
	text: string;
	/** The label htmlFor */
	htmlFor: string;
};

function FormLabel({ ...props }: FormLabelProps) {
	return (
		<label htmlFor={props.htmlFor} className="p-4 text-2xl font-sans">
			{props.text}
		</label>
	);
}

export default FormLabel;
