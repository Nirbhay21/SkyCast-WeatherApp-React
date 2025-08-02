import { Outlet } from "react-router-dom"
import Layout from "./components/Layout"
import { ThemeProvider } from "./context/theme-provider"

function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark">
        <Layout>
          <Outlet />
        </Layout>
      </ThemeProvider>
    </div>
  )
}

export default App
