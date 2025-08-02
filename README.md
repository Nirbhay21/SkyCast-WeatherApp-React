# SkyCast Weather App 🌤️

A modern, responsive weather application built with React, TypeScript, and Vite. SkyCast provides real-time weather information, detailed forecasts, and an intuitive user experience with support for favorite cities and search history.

![SkyCast Weather App](https://img.shields.io/badge/React-19.1.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.11-38B2AC.svg)

## ✨ Features

### 🌍 Weather Information
- **Current Weather**: Real-time weather conditions with temperature, humidity, wind speed, and more
- **5-Day Forecast**: Detailed weather predictions for the next 5 days
- **Hourly Temperature**: 24-hour temperature trends with interactive charts
- **Weather Details**: Comprehensive weather metrics including feels-like temperature, visibility, pressure, and UV index

### 🏙️ Location Services
- **Geolocation Support**: Automatic detection of user's current location
- **City Search**: Smart search functionality with autocomplete suggestions
- **Favorite Cities**: Save and quickly access up to 10 favorite locations
- **Search History**: Track recent searches for quick access

### 🎨 User Experience
- **Dark/Light Theme**: Toggle between themes with system preference detection
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Loading Skeletons**: Smooth loading states for better user experience
- **Error Handling**: Graceful error handling with informative messages
- **Real-time Updates**: Automatic data refresh and manual refresh options

## 🚀 Quick Start

### Prerequisites
- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd skycast-weather-app
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_OPENWEATHER_API_KEY=your_openweather_api_key_here
   ```
   
   Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)

4. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |

## 🏗️ Tech Stack

### Core Technologies
- **[React 19.1.0](https://react.dev/)** - UI library with latest features
- **[TypeScript 5.8.3](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite 7.0.4](https://vitejs.dev/)** - Fast build tool and dev server

### State Management & API
- **[Redux Toolkit](https://redux-toolkit.js.org/)** - Predictable state container
- **[RTK Query](https://redux-toolkit.js.org/rtk-query/overview)** - Data fetching and caching
- **[OpenWeatherMap API](https://openweathermap.org/api)** - Weather data source

### Styling & UI
- **[TailwindCSS 4.1.11](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Recharts](https://recharts.org/)** - Chart library for data visualization

### Routing & Navigation
- **[React Router DOM](https://reactrouter.com/)** - Client-side routing

### Additional Libraries
- **[date-fns](https://date-fns.org/)** - Date utility library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[cmdk](https://cmdk.paco.me/)** - Command palette interface

## 📁 Project Structure

```
src/
├── app/                            # Redux store configuration
│   ├── config.ts                   # API configuration
│   └── store.ts                    # Redux store setup
├── assets/                         # Static assets
│   ├── logo-dark.png
│   └── logo-light.png
├── components/                     # Reusable components
│   ├── ui/                         # Base UI components (shadcn/ui)
│   ├── skeletons/                  # Loading skeleton components
│   ├── CitySearch.tsx              # City search functionality
│   ├── CurrentWeather.tsx          # Current weather display
│   ├── Header.tsx                  # Application header
│   ├── Layout.tsx                  # Main layout wrapper
│   └── ...                         # Other components
├── context/                        # React contexts
│   └── theme-provider.tsx          # Theme context
├── features/                       # Feature-based modules
│   └── api/                        # API slices
│       ├── geoApiSlice.ts          # Geocoding API
│       └── weatherApiSlice.ts      # Weather API
├── hooks/                          # Custom React hooks
│   ├── use-favorite.tsx            # Favorite cities management
│   ├── use-geolocation.tsx         # Geolocation handling
│   ├── use-locale-storage.tsx      # Local storage wrapper
│   └── use-search-history.tsx      # Search history management
├── lib/                            # Utility functions
│   └── utils.ts                    # Common utilities
├── pages/                          # Page components
│   ├── city-page.tsx               # Individual city page
│   └── weather-dashboard.tsx       # Main dashboard
├── types/                          # TypeScript type definitions
│   ├── forecast.ts                 # Forecast data types
│   ├── geocoding.ts                # Geocoding types
│   ├── location.ts                 # Location types
│   ├── search-history.ts           # Search history types
│   ├── weather.ts                  # Weather data types
│   └── index.ts                    # Type exports
├── App.tsx                         # Root component
├── index.css                       # Global styles
└── main.tsx                        # Application entry point
```

## 🔧 Configuration

### Environment Variables
- `VITE_OPENWEATHER_API_KEY` - Your OpenWeatherMap API key

### API Configuration
The app uses OpenWeatherMap API for weather data and geocoding. Configuration is managed in [`src/app/config.ts`](src/app/config.ts).

### Theme Configuration
Supports automatic system theme detection with manual override. Themes are managed through the [`ThemeProvider`](src/context/theme-provider.tsx).

## 📱 Features in Detail

### Weather Dashboard
- Real-time weather conditions for user's current location
- Comprehensive weather details and metrics
- 5-day weather forecast with daily highs/lows
- Hourly temperature chart for the next 24 hours
- Quick access to favorite cities

### City Search & Management
- Intelligent city search with autocomplete
- Search history tracking (last 10 searches)
- Favorite cities management (up to 10 favorites)
- Quick navigation between cities

### Data Management
- Efficient caching with RTK Query
- Automatic data refresh every 5 minutes
- Manual refresh capability
- Offline-first approach with cached data

## 🎨 Design System

The application uses a modern design system built on:
- **TailwindCSS** for utility-first styling
- **Radix UI** for accessible component primitives
- **Custom component library** following design patterns
- **Consistent spacing and typography** scales
- **Responsive breakpoints** for all device sizes

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [Radix UI](https://www.radix-ui.com/) for accessible component primitives
- [Lucide](https://lucide.dev/) for beautiful icons
- [shadcn/ui](https://ui.shadcn.com/) for component inspiration

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Include screenshots if applicable

---

**Built with ❤️ using React, TypeScript, and modern web technologies.**
