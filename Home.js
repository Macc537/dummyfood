import { useRestaurants } from "../context/RestaurantContext";
import RestaurantCard from "./RestaurantCard";
import "./Home.css";

const Home = () => {
  const { restaurants, filters, setFilters } = useRestaurants();

  return (
    <div className="home">
      <div className="filters">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={filters.searchQuery}
          onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
        />
        <select
          value={filters.minRating}
          onChange={(e) => setFilters({ ...filters, minRating: Number(e.target.value) })}
        >
          <option value={0}>All Ratings</option>
          <option value={4}>⭐ 4+</option>
          <option value={4.5}>⭐ 4.5+</option>
        </select>
        <select
          value={filters.cuisine}
          onChange={(e) => setFilters({ ...filters, cuisine: e.target.value })}
        >
          <option value="all">All Cuisines</option>
          <option value="Italian">Italian</option>
          <option value="Indian">Indian</option>
          <option value="Mexican">Mexican</option>
          <option value="Japanese">Japanese</option>
        </select>
      </div>

      <h2 className="section-title">Top Rated Restaurants ⭐</h2>
      <div className="restaurant-container">
        {restaurants
          .filter(({ restaurant }) => restaurant.rating >= 4.5)
          .map(({ restaurant }) => (
            <RestaurantCard key={restaurant.id} resdata={restaurant} />
          ))}
      </div>

      <h2 className="section-title">All Restaurants</h2>
      <div className="restaurant-container">
        {restaurants.map(({ restaurant }) => (
          <RestaurantCard key={restaurant.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Home;