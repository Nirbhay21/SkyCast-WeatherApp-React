import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import WeatherDashboard from "./pages/weather-dashboard.tsx"
import CityPage from "./pages/city-page.tsx"
import App from "./App.tsx"
import { Provider } from "react-redux"
import { store } from "./app/store.ts"
import { Toaster } from "sonner"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <WeatherDashboard />
      },
      {
        path: "/city/:cityName",
        element: <CityPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <Toaster richColors />
  </StrictMode>,
)
