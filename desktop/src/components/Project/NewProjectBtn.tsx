import client from '../../client';
import { ProjectData, SceneType } from '../../types/data';

export function NewProjectBtn() {
	const handleClick = () => {
		const data: ProjectData = {
			project_name: 'testproject',
			scene_data: {
				scene_name: 'testscene',
				scene_type: SceneType.Live,
				scene_settings: {
					recording: false,
				},
			},
		};

		const data_to_use = [data.project_name, data.scene_data.scene_name];
		client.mutation(['createProject', data_to_use]).then((res) => {
			console.log(res);
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
