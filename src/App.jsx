// import { MoviesGrid } from "./Components/MoviesGrid";
import { LandingPage } from "./Pages/LandingPage";
import { MovieDetails } from "./Pages/MovieDetails";
import { Movies } from './Components/Movies';
import { AboutUs } from "./Components/AboutUs";
import { ContactUs } from "./Components/ContactUs";
import { Login } from "./Components/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";


export function App() {
  return (
    <Router>

      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </Router>
  );
}
