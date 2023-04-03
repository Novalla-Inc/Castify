import { createClient } from '@rspc/client';
import { TauriTransport } from '@rspc/tauri';
// @ts-ignore
import type { Procedures } from './ts/bindings';
import { SaveData } from './types/data';

const client = createClient<Procedures>({
	transport: new TauriTransport(),
});

client.query(['version']).then((version) => {
	console.log(version);
});

// TODO: eventually send json data to the backend
let data = ['test', 'test', 'test', 'test', 'save.yml'];

client.mutation(['saveData', data]).then((res) => {
	console.log(res);
});

export default function App() {
	return <div></div>;
}
