import './App.css';
import { DownloadButton } from './components/DownloadButton';
import { Tools } from './components/Tools';

function App() {
	return (
		<div className="App">
			<Tools>
				<DownloadButton />
				<DownloadButton />
			</Tools>
		</div>
	);
}

export default App;
