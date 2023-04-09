import { createClient } from '@rspc/client';
import { TauriTransport } from '@rspc/tauri';
import type { Procedures } from './ts/bindings';

const CLIENT = createClient<Procedures>({
	transport: new TauriTransport(),
});

export default CLIENT;
