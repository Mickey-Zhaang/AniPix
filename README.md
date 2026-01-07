# React TypeScript Boilerplate

A modern, production-ready React application boilerplate built with TypeScript, featuring comprehensive development tooling, animation support, and best practices out of the box.

## 🚀 Features

### Core Framework & Language

- **React 19.1.1** - Latest React with modern features and performance improvements
- **TypeScript 5.8.3** - Full type safety with strict mode enabled
- **Vite 7.1.2** - Lightning-fast build tool with HMR (Hot Module Replacement)
- **ES2022** - Modern JavaScript features and syntax

### Styling & UI

- **Styled Components 6.1.19** - CSS-in-JS with TypeScript support

### Animation

- **GSAP 3.14.2** - Professional-grade animation library for CSS, DOM, and SVG animations
  - Supports timeline-based animations
  - Scroll-triggered animations
  - Performance-optimized animations

### Component Development

- **Storybook 8.6.14** - Component documentation and testing environment
  - Interactive component playground
  - Accessibility testing addon
  - Documentation generation
  - Theme support
  - Responsive testing

### Code Quality & Formatting

- **ESLint 9.33.0** - Modern flat config with TypeScript support
  - React Hooks linting rules
  - React Refresh plugin for Vite
  - Prettier integration
  - TypeScript ESLint rules
- **Prettier 3.6.2** - Code formatter with import sorting
  - Automatic import organization via `@trivago/prettier-plugin-sort-imports`
  - Consistent code style across the project
  - Universal line ending support (`auto`)
  - Import order: React → React-related → Path aliases → Relative imports

### Testing

- **Vitest 3.2.4** - Fast unit testing framework
  - Browser testing support
  - Code coverage with V8
  - Playwright integration for E2E testing

### Build & Development Tools

- **Vite Plugins**:
  - `@vitejs/plugin-react` - React Fast Refresh support
  - `vite-plugin-svgr` - SVG as React components
  - `vite-tsconfig-paths` - TypeScript path alias resolution
- **TypeScript Configuration**:
  - Strict mode enabled
  - Unused variable/parameter detection
  - Modern module resolution (bundler mode)
  - React JSX transform

### Package Management

- **pnpm 10.15.0** - Fast, disk space efficient package manager
- **Workspace Support** - Ready for monorepo setup

## 🛠️ Tech Stack

| Category               | Technology        | Version |
| ---------------------- | ----------------- | ------- |
| **Frontend Framework** | React             | 19.1.1  |
| **Language**           | TypeScript        | 5.8.3   |
| **Build Tool**         | Vite              | 7.1.2   |
| **Styling**            | styled-components | 6.1.19  |
| **Animation**          | GSAP              | 3.14.2  |
| **Testing**            | Vitest            | 3.2.4   |
| **Component Docs**     | Storybook         | 8.6.14  |
| **Linting**            | ESLint            | 9.33.0  |
| **Formatting**         | Prettier          | 3.6.2   |
| **Package Manager**    | pnpm              | 10.15.0 |

## 📁 Project Structure

```
AniPix/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── index.ts        # Component exports
│   │   └── *.tsx           # Component files
│   ├── assets/             # Static assets and resources
│   │   └── index.ts        # Asset exports
│   ├── App.tsx             # Main application component
│   ├── App.css             # App-specific styles
│   ├── main.tsx           # Application entry point
│   ├── index.css          # Global styles & scrollbar
│   └── vite-env.d.ts      # Vite type definitions
├── .storybook/             # Storybook configuration
│   ├── main.ts            # Storybook main config
│   ├── preview.ts         # Storybook preview config
│   └── preview-head.html  # Storybook head HTML
├── index.html             # HTML entry point
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript root config
├── tsconfig.app.json      # TypeScript app config
├── tsconfig.node.json     # TypeScript node config
├── eslint.config.js       # ESLint configuration
├── .prettierrc            # Prettier configuration
└── package.json           # Dependencies & scripts
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: LTS version)
- **pnpm** (recommended) or npm/yarn

### Installation

1. **Clone or use this template**

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

   The app will be available at `http://localhost:5173` (Vite default port)

## 📚 Available Scripts

| Script                 | Description                                          |
| ---------------------- | ---------------------------------------------------- |
| `pnpm serve`           | Start Vite development server with HMR               |
| `pnpm build`           | Build for production (TypeScript check + Vite build) |
| `pnpm preview`         | Preview production build locally                     |
| `pnpm lint`            | Run ESLint to check code quality                     |
| `pnpm lint:fix`        | Run ESLint and auto-fix issues                       |
| `pnpm format`          | Format all code with Prettier                        |
| `pnpm format:check`    | Check if code is formatted (CI-friendly)             |
| `pnpm storybook`       | Start Storybook dev server on port 6006              |
| `pnpm build-storybook` | Build static Storybook for deployment                |

## 🎨 Key Features Explained

### TypeScript Strict Mode

The project uses TypeScript's strict mode with additional checks:

- `strict: true` - All strict type checking options enabled
- `noUnusedLocals` - Error on unused local variables
- `noUnusedParameters` - Error on unused function parameters
- `noFallthroughCasesInSwitch` - Error on switch case fallthrough

### Code Formatting & Import Organization

Prettier is configured with automatic import sorting:

- React imports first
- React-related packages next
- Path aliases (`@/`)
- Relative imports last
- Automatic import separation and specifier sorting

### Custom Scrollbar

A sleek, dark-themed scrollbar is included:

- **Chrome/Safari/Edge**: Custom webkit scrollbar styling
- **Firefox**: Native scrollbar color customization
- Dark theme optimized for modern UIs
- Hover effects for better UX

### GSAP Animation Library

GSAP is pre-installed and ready to use:

```typescript
import { gsap } from 'gsap';

// Animate CSS properties
gsap.to(element, { x: 100, duration: 1 });

// Timeline animations
const tl = gsap.timeline();
tl.to(element1, { opacity: 0 }).to(element2, { y: 50 });
```

### Styled Components Best Practices

- Use `$` prefix for styled-component props to avoid DOM warnings
- TypeScript interfaces for styled component props
- Template literals for conditional styling

## 🎯 Development Guidelines

### Code Style

- **TypeScript**: Strict mode, avoid `any` type
- **React**: Functional components with hooks
- **Styling**: styled-components with TypeScript support
- **Naming**: PascalCase for components, camelCase for functions
- **Imports**: Automatically sorted by Prettier

### Component Best Practices

1. **Single Responsibility**: One component, one purpose
2. **TypeScript Interfaces**: Always define props interfaces
3. **Accessibility**: Include ARIA attributes and keyboard navigation
4. **Performance**: Use React.memo, useCallback, useMemo when needed
5. **Storybook**: Create stories for component documentation

### Styled Components Guidelines

```typescript
// ✅ Good: Prefix styled props with $
interface StyledButtonProps {
  $variant: 'primary' | 'secondary';
  $disabled: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  background: ${({ $variant }) =>
    $variant === 'primary' ? '#2563eb' : '#4b5563'};
`;
```

## 🧪 Testing

### Running Tests

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### Testing Guidelines

- **Unit Tests**: Test individual component behavior
- **Integration Tests**: Test component interactions
- **Accessibility Tests**: Use Storybook's accessibility addon
- **Visual Tests**: Use Storybook for visual regression testing

## 📖 Storybook

### Starting Storybook

```bash
pnpm storybook
```

Storybook will be available at `http://localhost:6006`

### Storybook Features

- **Component Showcase**: Visual documentation of all components
- **Interactive Testing**: Test component variants and states
- **Accessibility Testing**: Built-in accessibility checks
- **Responsive Testing**: Test components at different screen sizes
- **Theme Support**: Test components with different themes
- **Auto-documentation**: Automatic documentation generation

## 🎬 Animation with GSAP

### Basic Usage

```typescript
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function AnimatedComponent() {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      gsap.to(elementRef.current, {
        x: 100,
        rotation: 360,
        duration: 2,
        ease: "power2.out"
      });
    }
  }, []);

  return <div ref={elementRef}>Animated</div>;
}
```

### Advanced Features

- **ScrollTrigger**: Scroll-based animations
- **Timeline**: Complex animation sequences
- **Plugins**: Text, Morph, DrawSVG, and more
- **Performance**: Hardware-accelerated animations

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
- **AWS S3 + CloudFront**: Scalable static hosting
- **Azure Static Web Apps**: Microsoft's hosting solution

## 🔧 Configuration Files

### TypeScript

- `tsconfig.json` - Root TypeScript configuration
- `tsconfig.app.json` - Application-specific TypeScript config
- `tsconfig.node.json` - Node.js tooling TypeScript config

### ESLint

- `eslint.config.js` - Modern flat config format
- Integrated with Prettier to avoid conflicts
- React Hooks and TypeScript rules enabled

### Prettier

- `.prettierrc` - Code formatting rules
- Import sorting plugin configured
- Universal line ending support

### Vite

- `vite.config.ts` - Build configuration
- React plugin for Fast Refresh
- SVG as React components support
- TypeScript path alias resolution

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run `pnpm format` and `pnpm lint:fix` before committing
5. Commit your changes (`git commit -m 'feat: Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Commit Message Convention

Use conventional commit messages:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Test additions or changes
- `chore:` Build process or auxiliary tool changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [GSAP](https://greensock.com/gsap/) - Animation library
- [styled-components](https://styled-components.com/) - CSS-in-JS
- [Storybook](https://storybook.js.org/) - Component documentation
- [Vitest](https://vitest.dev/) - Testing framework
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting

## 📝 Template Usage

This boilerplate provides a solid foundation for building modern React applications with:

- ✅ **Production-ready setup** with optimized build configuration
- ✅ **Animation support** with GSAP
- ✅ **Component library** with Storybook documentation
- ✅ **Type safety** with strict TypeScript configuration
- ✅ **Code quality** with ESLint and Prettier
- ✅ **Testing infrastructure** with Vitest
- ✅ **Modern styling** with styled-components
- ✅ **Custom UI elements** (scrollbar, fonts)
- ✅ **Developer experience** with HMR and fast builds

Use this template as a starting point for your next React project!
