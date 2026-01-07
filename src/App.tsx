import './App.css';
import { DownloadButton } from './components/DownloadButton';
import { ImportButton } from './components/ImportButton';
import { Tools } from './components/Tools';

function App() {
	return (
		<div className="App">
			<Tools>
				<ImportButton />
				<DownloadButton />
			</Tools>
		</div>
	);
}

export default App;
