import { createClient } from '@rspc/client';
import { TauriTransport } from '@rspc/tauri';
// @ts-ignore
import type { Procedures } from './ts/bindings';
import ContentDrawer from './components/ContentDrawer/ContentDrawer';
import { useEffect, useState } from 'react';

const client = createClient<Procedures>({
	transport: new TauriTransport(),
});

// test query
client.query(['version']).then((version) => {
	console.log(version);
});

export default function App() {
	return (
		<div>
			<span className="text-red-400">Test</span>
			<ContentDrawer />
		</div>
	);
}
