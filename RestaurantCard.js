import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ resdata }) => {
  const navigate = useNavigate();

  return (
    <div className="res-card" onClick={() => navigate(`/restaurant/${resdata.id}`)}>
      <img className="res-logo" src={resdata.image} alt={resdata.name} />
      <h3>{resdata.name}</h3>
      <h4>{resdata.cuisine.join(", ")}</h4>
      <h4>⭐ {resdata.rating}</h4>
    </div>
  );
};

export default RestaurantCard;
