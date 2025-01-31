import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCasts } from "../../services/takeApi";
import imageNotFound from "../../assets/img/imageNotFound.jpg";
import s from "./MovieCast.module.css";

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    async function fetchCast() {
      try {
        const res = await getCasts(movieId);
        setCast(res.data.cast);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCast();
  }, [movieId]);

  return cast.length === 0 ? (
    <p>We don`t have any information about casts for this movie</p>
  ) : (
    <ul>
      {cast.map((cast) => {
        return (
          <div key={cast.credit_id}>
            <img
              className={s.castImg}
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                  : imageNotFound
              }
              alt={cast.name}
            />
            <p>{cast.name}</p>
            <p>Character: {cast.character}</p>
          </div>
        );
      })}
    </ul>
  );
};

export default Cast;
