import { createClient } from '@rspc/client';
import { TauriTransport } from '@rspc/tauri';
// @ts-ignore
import type { Procedures } from './ts/bindings';

const client = createClient<Procedures>({
	transport: new TauriTransport(),
});

export default client;
