import { MoviesGrid } from './Components/MoviesGrid'
import { LandingPage } from './Pages/LandingPage';
import { MovieDetails } from './Pages/MovieDetails';
import styles from './assets/Styles/App.module.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

export function App() {
  

  return (
    <Router>
      <header>
        <Link to="/"><h1 className = {styles.title}>Veta +</h1></Link>
        
      </header>
      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router> 
   
  )
}

