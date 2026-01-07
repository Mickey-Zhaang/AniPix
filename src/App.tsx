import './App.css';
import { DisplaySection } from './components/Display/DisplaySection';
import { ElementsProvider } from './components/Elements/ElementsContext';
import { ElementsSection } from './components/Elements/ElementsSection';
import { ProjectSettingsProvider } from './components/Elements/ProjectSettingsContext';
import { FramesProvider } from './components/Frames/FramesContext';
import { FramesSection } from './components/Frames/FramesSection';
import { AnimateButton } from './components/Tools/AnimateButton';
import { DownloadButton } from './components/Tools/DownloadButton';
import { ImportButton } from './components/Tools/ImportButton';
import { Tools } from './components/Tools/Tools';

function App() {
	return (
		<ElementsProvider>
			<ProjectSettingsProvider>
				<FramesProvider>
					<div className="App">
						<DisplaySection />
						<Tools>
							<AnimateButton />
							<ImportButton />
							<DownloadButton />
						</Tools>
						<ElementsSection />
						<FramesSection />
					</div>
				</FramesProvider>
			</ProjectSettingsProvider>
		</ElementsProvider>
	);
}

export default App;
