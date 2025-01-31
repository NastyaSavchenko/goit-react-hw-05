import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../services/takeApi";
import { FaUserCircle } from "react-icons/fa";
import ReadMore from "../ReadMore/ReadMore.jsx";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    async function fetchReviews() {
      try {
        const response = await getReviews(movieId);
        setReviews(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchReviews();
  }, [movieId]);

  return reviews.length !== 0 ? (
    <ul>
      {reviews.map((review) => {
        return (
          <div key={review.id}>
            <div>
              <FaUserCircle
                style={{
                  fill: "blue",
                  marginRight: "5px",
                  width: "20px",
                  height: "20px",
                }}
              />
              {review.author}
            </div>
            <ReadMore>{review.content}</ReadMore>
          </div>
        );
      })}
    </ul>
  ) : (
    <p>We don`t have any reviews for this movie</p>
  );
};

export default Reviews;
