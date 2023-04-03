import client from '../../client';

export function NewProjectBtn() {
	const handleClick = () => {
		const data = ['name', 'testproject'];
		client
			.mutation(['createProject', data])
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				alert(err);
			});
	};

	return (
		<button
			onClick={handleClick}
			className="w-32 h-12 bg-teal-400 border-teal-400 rounded-md shadow-lg hover::bg-teal-300 hover:text-white"
		>
			New Project
		</button>
	);
}
