import { add, divide, subtract } from 'gridaly-package';

const App = () => (
	<div>
		<p>gridaly-package function</p>
		<p>add: {add(4, 6)}</p>
		<p>subtract: {subtract(20, 6)}</p>
		<p>divide: {divide(100, 5)}</p>
	</div>
);

export default App;
