import { createContext, useContext, useState } from "react";
import originaldata from "../data/data";

const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    minRating: 0,
    cuisine: 'all',
    searchQuery: '',
  });

  const filterRestaurants = (restaurants) => {
    return restaurants.filter(({ restaurant }) => {
      const matchesRating = restaurant.rating >= filters.minRating;
      const matchesCuisine = filters.cuisine === 'all' || 
        restaurant.cuisine.some(c => c.toLowerCase().includes(filters.cuisine.toLowerCase()));
      const matchesSearch = restaurant.name.toLowerCase().includes(filters.searchQuery.toLowerCase());
      
      return matchesRating && matchesCuisine && matchesSearch;
    });
  };

  return (
    <RestaurantContext.Provider value={{ 
      restaurants: filterRestaurants(originaldata),
      filters,
      setFilters
    }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurants = () => useContext(RestaurantContext);