import './App.css';
import { DisplaySection } from './components/Display/DisplaySection';
import { ElementsProvider } from './components/Elements/ElementsContext';
import { ElementsSection } from './components/Elements/ElementsSection';
import { DownloadButton } from './components/Tools/DownloadButton';
import { ImportButton } from './components/Tools/ImportButton';
import { Tools } from './components/Tools/Tools';

function App() {
	return (
		<ElementsProvider>
			<div className="App">
				<DisplaySection />
				<Tools>
					<ImportButton />
					<DownloadButton />
				</Tools>
				<ElementsSection />
			</div>
		</ElementsProvider>
	);
}

export default App;
