import { Dashboard } from 'src/routes/Dashboard';
import { Example } from 'src/routes/Example';

export const routes = [
	{ name: 'Dashboard', path: '/', component: Dashboard },
	{ name: 'Example', path: '/example', component: Example },
];
