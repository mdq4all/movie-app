import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import MoviesDetails from "./MoviesDetails"
import LandingPage from "./LandingPage"
import Search from "../components/Search"

function App() {
  return (
    <BrowserRouter>
      <div className="background min-h-screen">
        <header className="fixed w-full bg-hero-bg bg-cover z-40">
          <Link to="/">
            <h1 className="text-6xl font-bold text-gray-50 neon py-8 text-center">
              MOVIES
            </h1>
          </Link>
          <Search />
        </header>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/movies/:movieId" element={<MoviesDetails />} />
          </Routes>
        <main>
          
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
