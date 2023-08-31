import { add } from 'gridaly-package';

const App = () => {
	const x = add(3, 5);
	return (
		<>
			<div>
				<p>gridaly-package function</p>
				{x}
			</div>
		</>
	);
};

export default App;
