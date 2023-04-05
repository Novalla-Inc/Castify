import CLIENT from '../../client';
import { ProjectData, SceneType } from '../../types/data';

type DataProps = {
	project_name: string;
	streaming_location?: string;
	scene_name: string;
	onClick?: () => void;
};

function CreateProjectBtn({ ...props }: DataProps) {
	const handleClick = () => {
		const data: ProjectData = {
			project_name: props.project_name,
			scene_data: {
				scene_name: props.scene_name,
				scene_type: SceneType.Preview,
				scene_settings: {
					recording: false,
				},
			},
		};

		const data_to_use = [data.project_name, data.scene_data.scene_name];

		CLIENT.mutation(['createProject', data_to_use]).then((res) => {
			console.log(res);
		});
	};

	return (
		<button
			onClick={handleClick}
			type="button"
			className="w-32 h-12 bg-teal-400 border-teal-400 rounded-md shadow-lg hover::bg-teal-300 hover:text-white"
		>
			Create Project
		</button>
	);
}

export default CreateProjectBtn;
