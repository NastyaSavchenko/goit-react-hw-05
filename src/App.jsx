import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import Layout from "./components/Layout/Layout.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage.jsx"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage.jsx")
);
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast.jsx"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews.jsx")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
