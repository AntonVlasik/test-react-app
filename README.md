# React Weather App 2026

A modern React weather application built with React 19, TypeScript, and Vite 7. Features a clean Material UI interface, TanStack Query for data management, and comprehensive testing setup.

## 🚀 Features

- ⚡ **Blazing Fast**: Built with Vite 7 and SWC for maximum performance
- 🔧 **Type Safety**: Strict TypeScript configuration with full type coverage
- 🎨 **Modern UI**: Material UI with custom theme and responsive design
- 📱 **Responsive**: Mobile-first design that works on all devices
- 🧪 **Well Tested**: Comprehensive test suite with Vitest and React Testing Library
- 📊 **Data Management**: TanStack Query for efficient API state management
- 🔄 **Routing**: React Router for seamless navigation
- 🎯 **API Ready**: Axios setup with interceptors and error handling

## 🛠️ Tech Stack

- **React 19.2** - Latest React with concurrent features
- **TypeScript** - Full type safety with strict mode
- **Vite 7** - Next generation frontend build tool
- **Material UI** - React component library with Material Design
- **TanStack Query** - Powerful data synchronization for React
- **React Router** - Declarative routing for React applications
- **Axios** - Promise-based HTTP client
- **Vitest** - Fast unit test framework
- **ESLint** & **Prettier** - Code quality and formatting

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── config/             # Configuration files (theme, etc.)
├── hooks/              # Custom React hooks
├── services/           # API services and data fetching
├── test/               # Test utilities and test files
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   VITE_API_BASE_URL=https://api.openweathermap.org/data/2.5
   VITE_WEATHER_API_KEY=your_openweather_api_key_here
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Start development server on port 3000
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run lint` - Lint code
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## 🧪 Testing

The project includes a comprehensive testing setup:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:ui

# Run tests once (CI mode)
npm run test:run
```

## 📦 Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

## 🔧 Configuration

### TypeScript

Strict TypeScript configuration with:

- Strict null checks
- No unused variables/parameters
- No implicit returns
- Exact optional property types

### ESLint

Modern ESLint configuration with:

- TypeScript support
- React hooks rules
- Import/export rules
- Consistent code style

### Prettier

Consistent code formatting with:

- Single quotes
- No semicolons
- 100 character line width
- Trailing commas

## 🌟 Key Design Decisions

1. **Vite over Create React App**: For faster builds and better development experience
2. **SWC over Babel**: For significantly faster TypeScript compilation
3. **TanStack Query**: For efficient server state management
4. **Material UI**: For consistent, accessible UI components
5. **Strict TypeScript**: For maximum type safety and developer confidence

## 🚀 Deployment

The application can be deployed to any static hosting service:

- **Vercel**: `npm run build` and deploy the `build/` folder
- **Netlify**: Connect your repository and set build command to `npm run build`
- **GitHub Pages**: Use GitHub Actions to build and deploy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Material UI](https://mui.com/) - Component library
- [TanStack Query](https://tanstack.com/query) - Data fetching library
