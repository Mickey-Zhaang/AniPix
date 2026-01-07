import './App.css';
import { DownloadButton } from './components/Tools/DownloadButton';
import { ImportButton } from './components/Tools/ImportButton';
import { Tools } from './components/Tools/Tools';

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
