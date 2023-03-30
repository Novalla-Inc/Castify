import { createClient } from '@rspc/client';
import { TauriTransport } from '@rspc/tauri';
// @ts-ignore
import type { Procedures } from './ts/bindings';

const client = createClient<Procedures>({
	transport: new TauriTransport(),
});

client.query(['version']).then((version) => {
	console.log(version);
});

export default function App() {
	return <div></div>;
}
