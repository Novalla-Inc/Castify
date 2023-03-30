import { createClient } from '@rspc/client';
import { TauriTransport } from '@rspc/tauri';
import { Procedures } from './ts/procedures';

const client = createClient<Procedures>({
	transport: new TauriTransport(),
});

client.query(['version']).then((data) => console.log(data));

export default function App() {
	return <div></div>;
}
