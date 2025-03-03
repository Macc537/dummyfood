import { useParams } from "react-router-dom";
import { useRestaurants } from "../context/RestaurantContext";
import originaldata from "../data/data";
import "./RestaurantDetail.css";

const RestaurantDetail = ({ addToCart }) => {
  const { id } = useParams();
  const { restaurants } = useRestaurants();

  const restaurant = restaurants.find((res) => res.restaurant.id === id)?.restaurant;

  if (!restaurant) {
    return <h2>Restaurant not found!</h2>;
  }

  return (
    <div className="restaurant-detail">
      <h2>{restaurant.name}</h2>
      <img src={restaurant.image} alt={restaurant.name} />
      <p><strong>Address:</strong> {restaurant.address}</p>
      <p><strong>Contact:</strong> {restaurant.contact}</p>
      <p><strong>Cuisine:</strong> {restaurant.cuisine.join(", ")}</p>
      <p><strong>Rating:</strong> ⭐ {restaurant.rating}</p>
      <p><strong>Delivery Time:</strong> {restaurant.deliveryTime}</p>

      <h3>Menu</h3>
      <div className="menu">
        {restaurant.menu.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>Price: {item.price} Rupees</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetail;
