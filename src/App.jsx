import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Movies from "./pages/Movies/Movies.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import MovieCard from "./components/MovieCard/MovieCard.jsx";
import Cast from "./components/Cast/Cast.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import Layout from "./components/Layout/Layout.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />}>
          <Route path="/movies/:movieId" element={<MovieCard />}>
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
