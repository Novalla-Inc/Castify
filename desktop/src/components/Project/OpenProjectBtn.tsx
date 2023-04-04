import { useState } from 'react';
import NewProjectForm from './NewProjectForm';

function OpenProjectBtn() {
	const [open, setOpen] = useState(false);

	return (
		<div>
			{!open ? (
				<button
					onClick={() => setOpen(!open)}
					className="w-32 h-12 bg-teal-400 border-teal-400 rounded-md shadow-lg hover::bg-teal-300 hover:text-white"
				>
					Create Project
				</button>
			) : (
				<div className="w-92 h-92">
					<div className="flex flex-row">
						<button
							onClick={() => setOpen(!open)}
							className="w-32 h-12 bg-teal-400 border-teal-400 rounded-md shadow-lg hover::bg-teal-300 hover:text-white"
						>
							Close
						</button>
					</div>
					<div>
						<NewProjectForm />
					</div>
				</div>
			)}
		</div>
	);
}

export default OpenProjectBtn;
