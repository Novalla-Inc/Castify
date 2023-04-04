import { useState } from 'react';
import { Input, Select } from '../Skeleton/Inputs/Input';
import FormLabel from '../Skeleton/Inputs/Label';
import CreateProjectBtn from './CreateProjectBtn';

function NewProjectForm() {
	const [projectName, setProjectName] = useState('');
	const [streamLocation, setStreamLocation] = useState('');
	const [sceneName, setSceneName] = useState('');

	return (
		<form className="flex flex-col">
			<div className="flex-col">
				<FormLabel text="Project Name" htmlFor="project-name" />
				<Input
					id="username"
					placeholder='e.g "John Doe"'
					onChange={(e) => {
						setProjectName(e.target.value);
					}}
				/>
			</div>
			<div className="flex-col">
				<FormLabel text="Stream Location" htmlFor="stream-location" />
				<Select
					id="stream-location"
					onChange={(e) => {
						setStreamLocation(e.target.value);
					}}
				/>
			</div>
			<div className="flex-col">
				<FormLabel text="Scene Name" htmlFor="scene-name" />
				<Input
					id="scene-name"
					type="text"
					placeholder='e.g. "Scene 1" or "Main"'
					onChange={(e) => {
						setSceneName(e.target.value);
					}}
				/>
			</div>
			<CreateProjectBtn
				project_name={projectName}
				scene_name={sceneName}
				streaming_location={streamLocation}
			/>
		</form>
	);
}

export default NewProjectForm;
