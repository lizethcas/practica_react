import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import BlogPage from "./pages/BlogPage"
import PortfolioPage from "./pages/PortfolioPage"
import StudioPage from "./pages/StudioPage"
import NavBarComponent from "./components/NavBarComponent"


function App() {



  return (
    <div>
      <h1 className="font-bold text-3xl text-regal-blue underline">yo</h1>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/studio" element={<StudioPage />} />
      </Routes>
    </div>
  )
}

export default App
