# AniPix

A modern web-based animation tool for creating and previewing pixel art animations from tilesheet images. Import your sprite sheets, extract individual frames, and animate them with customizable frame rates.

## 🎨 Features

### Core Functionality

- **Tilesheet Import**: Import image files (tilesheets) and organize them as elements
- **Frame Extraction**: Automatically extract individual frames from tilesheets based on customizable width and height settings
- **Frame Management**:
  - View all extracted frames in a horizontal scrolling container
  - Drag and drop to reorder frames
  - Select frames to view in the main display
  - Delete individual frames
- **Animation Preview**:
  - Play/pause animation controls
  - Customizable FPS (frames per second) settings
  - Automatic frame cycling through all extracted frames
- **Project Settings**:
  - Configure frame width and height
  - Adjust animation FPS (1-120)
  - Settings are applied globally across the application

### User Interface

- **Three-Panel Layout**:
  - **Left Sidebar (Tools)**: Import, download, and animation controls
  - **Center Display**: Shows the currently selected frame, scaled for visibility
  - **Right Sidebar (Elements)**:
    - Lists all imported elements (tilesheets)
    - Project settings panel at the bottom
- **Bottom Panel (Frames)**: Horizontal scrolling container displaying all extracted frames from the selected element

## 🛠️ Tech Stack

| Category               | Technology        | Version |
| ---------------------- | ----------------- | ------- |
| **Frontend Framework** | React             | 19.1.1  |
| **Language**           | TypeScript        | 5.8.3   |
| **Build Tool**         | Vite              | 7.1.2   |
| **Styling**            | styled-components | 6.1.19  |
| **Package Manager**    | pnpm              | 10.15.0 |

## 📁 Project Structure

```
AniPix/
├── src/
│   ├── components/
│   │   ├── Display/          # Main display section for selected frames
│   │   ├── Elements/          # Element management (tilesheets)
│   │   │   ├── AllElements.tsx
│   │   │   ├── Element.tsx
│   │   │   ├── ElementsContext.tsx
│   │   │   ├── ProjectSettingsPanel.tsx
│   │   │   └── ...
│   │   ├── Frames/            # Frame extraction and management
│   │   │   ├── AllFrames.tsx
│   │   │   ├── Frame.tsx
│   │   │   ├── extractFrames.ts
│   │   │   ├── FramesContext.tsx
│   │   │   └── ...
│   │   ├── Tools/             # Tool buttons (import, download, animate)
│   │   └── shared/            # Shared styled components
│   ├── assets/                # SVG icons and assets
│   ├── App.tsx                # Main application component
│   └── main.tsx               # Application entry point
├── vite.config.ts            # Vite configuration
└── package.json               # Dependencies & scripts
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: LTS version)
- **pnpm** (recommended) or npm/yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd AniPix
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm serve
   ```

   The app will be available at `http://localhost:5173`

## 📚 Available Scripts

| Script              | Description                            |
| ------------------- | -------------------------------------- |
| `pnpm serve`        | Start Vite development server with HMR |
| `pnpm build`        | Build for production                   |
| `pnpm preview`      | Preview production build locally       |
| `pnpm lint`         | Run ESLint to check code quality       |
| `pnpm lint:fix`     | Run ESLint and auto-fix issues         |
| `pnpm format`       | Format all code with Prettier          |
| `pnpm format:check` | Check if code is formatted             |

## 🎯 How to Use

### Importing Tilesheets

1. Click the **Import** button in the left sidebar
2. Select one or more image files from your computer
3. Imported images will appear in the right sidebar as "Elements"

### Extracting Frames

1. **Select an element** from the right sidebar
2. The application will automatically extract frames based on your project settings:
   - Set the **Width** and **Height** in the Project Settings panel (bottom of right sidebar)
   - Frames are extracted using these dimensions as tile sizes
3. Extracted frames will appear in the bottom panel

### Viewing Frames

- Click on any frame in the bottom panel to view it in the main display area
- The display automatically scales frames for better visibility

### Animating

1. Ensure you have frames extracted from a selected element
2. Click the **Play** button in the left sidebar to start animation
3. The animation will cycle through all frames at the FPS rate set in Project Settings
4. Click **Pause** to stop the animation
5. Adjust the **FPS** slider in Project Settings to change animation speed

### Managing Elements and Frames

- **Delete Elements**: Hover over an element and click the × button
- **Delete Frames**: Hover over a frame and click the × button
- **Reorder Frames**: Drag and drop frames in the bottom panel to reorder them

## 🏗️ Architecture

### State Management

The application uses React Context API for state management:

- **ElementsContext**: Manages imported tilesheet images (elements)
- **FramesContext**: Manages extracted frames from selected elements
- **ProjectSettingsContext**: Manages global project settings (width, height, FPS)

### Frame Extraction

Frames are extracted using the HTML5 Canvas API:

1. Load the selected element's image
2. Calculate grid dimensions based on project width/height settings
3. Extract each tile using `canvas.drawImage()` with appropriate source coordinates
4. Convert each extracted tile to a data URL
5. Store frames in the FramesContext

### Component Organization

- **Tools**: Reusable tool buttons with shared styling
- **Elements**: Element list and project settings
- **Frames**: Frame extraction, display, and management
- **Display**: Main viewing area
- **Shared**: Common styled components (buttons, empty states, etc.)

## 🎨 Styling

The application uses `styled-components` for CSS-in-JS styling:

- Dark theme with subtle borders and hover effects
- Responsive layout that adapts to different screen sizes
- Custom scrollbars for better visual integration
- Consistent spacing and typography throughout

## 🚀 Deployment

### Build for Production

```bash
pnpm build
```

The built files will be in the `dist/` directory, optimized and ready for deployment.

### Recommended Hosting Platforms

- **Vercel**: Zero-config deployment with Git integration
- **Netlify**: Easy deployment with form handling
- **GitHub Pages**: Free hosting for public repositories
- **Firebase Hosting**: Google's hosting solution

## 🔧 Development

### Code Style

- **TypeScript**: Strict mode enabled, avoid `any` type
- **React**: Functional components with hooks
- **Styling**: styled-components with TypeScript support
- **Naming**: PascalCase for components, camelCase for functions

### Key Patterns

- **Context Providers**: Used for global state management
- **Custom Hooks**: Extract reusable logic (e.g., `useElements`, `useFrames`)
- **Styled Components**: All styling done with styled-components
- **Type Safety**: Full TypeScript coverage with strict mode

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [styled-components](https://styled-components.com/) - CSS-in-JS
