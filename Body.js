import React, { useState, useEffect } from "react";
import RestaurantCard from "./components/RestaurantCard";




const originaldata=[
  
  {
    "restaurant": {
      "id": "229343",
      "name": "Pizza Palace",
      "cuisine": ["Italian", "Wood-fired Pizzas"],
      "rating": 4.6,
      "deliveryTime": "35 mins",
      "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/3d6697e7e85742b1a5c32f0f8b5d7c2a",
      "address": "Sector 34, Chandigarh",
      "contact": null,
      "menu": [
        {
          "id": "330819230",
          "name": "Margherita Classic",
          "price": 299,
          "category": "Wood-fired Pizzas",
          "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/5a0e0d7c3e8f2e1f4a4c4b2d1e5f3a7c"
        },
        {
          "id": "330819231",
          "name": "Pepperoni Feast",
          "price": 399,
          "category": "Specialty Pizzas",
          "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/6b1e8f9a2d4c7e3f5a1b0d9e8f7c6d2e"
        }
      ]
    }
  },
  {
    "restaurant": {
      "id": "229344",
      "name": "Sushi Master",
      "cuisine": ["Japanese", "Sushi"],
      "rating": 4.8,
      "deliveryTime": "40 mins",
      "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/9a8b7c6d5e4f3a1b2c3d4e5f6a7b8c9d",
      "address": "Elante Mall, Chandigarh",
      "contact": null,
      "menu": [
        {
          "id": "440912345",
          "name": "Dragon Roll",
          "price": 499,
          "category": "Signature Rolls",
          "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6"
        }
      ]
    }
  },
  {
    "restaurant": {
      "id": "229345",
      "name": "Masala Junction",
      "cuisine": ["North Indian", "Mughlai"],
      "rating": 4.4,
      "deliveryTime": "25 mins",
      "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a",
      "address": "Sector 22 Market, Chandigarh",
      "contact": null,
      "menu": [
        {
          "id": "550123456",
          "name": "Butter Chicken",
          "price": 299,
          "category": "Curry Specials",
          "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8"
        }
      ]
    }
  },
  {
    "restaurant": {
      "id": "229346",
      "name": "Taco Fiesta",
      "cuisine": ["Mexican", "Tex-Mex"],
      "rating": 4.5,
      "deliveryTime": "30 mins",
      "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p",
      "address": "Sector 8, Chandigarh",
      "contact": null,
      "menu": [
        {
          "id": "660789012",
          "name": "Grande Burrito Bowl",
          "price": 249,
          "category": "Meal Bowls",
          "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/q1w2e3r4t5y6u7i8o9p0a1s2d3f4g5"
        }
      ]
    }
  },
  {
    "restaurant": {
      "id": "229347",
      "name": "Wok Express",
      "cuisine": ["Chinese", "Asian"],
      "rating": 4.3,
      "deliveryTime": "28 mins",
      "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/z9x8c7v6b5n4m3l2k1j0hgfedsa",
      "address": "Manimajra, Chandigarh",
      "contact": null,
      "menu": [
        {
          "id": "770890123",
          "name": "Hakka Noodles",
          "price": 179,
          "category": "Noodle Specials",
          "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/l3k4j5h6g7f8d9s0a1q2w3e4r5t6y7"
        }
      ]
    }
  },
  {
    "restaurant": {
      "id": "229348",
      "name": "The Burger Barn",
      "cuisine": ["American", "Fast Food"],
      "rating": 4.2,
      "deliveryTime": "25 mins",
      "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/u8i9o0p7y6t5r4e3w2q1asdfghjkl",
      "address": "Industrial Area, Chandigarh",
      "contact": null,
      "menu": [
        {
          "id": "880901234",
          "name": "Barn Special Double Patty",
          "price": 219,
          "category": "Signature Burgers",
          "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/m2n3b4v5c6x7z8l9k0j1h2g3f4d5s6a"
        }
      ]
    }
  },
  {
    "restaurant": {
      "id": "229349",
      "name": "Cream & Crust",
      "cuisine": ["Desserts", "Bakery"],
      "rating": 4.7,
      "deliveryTime": "20 mins",
      "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/q1w2e3r4t5y6u7i8o9p0asdfghjkl",
      "address": "Sector 17 Plaza, Chandigarh",
      "contact": null,
      "menu": [
        {
          "id": "990123456",
          "name": "Red Velvet Cake",
          "price": 149,
          "category": "Cake Slices",
          "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/n7m8b9v0c1x2z3l4k5j6h7g8f9d0s1a"
        }
      ]
    }
  }

]




const Body = ({ addToCart }) => {
  const [resdata, setData] = useState(originaldata);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&collection=80397"
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="body">
      <div className="res-container">
        {resdata.map((restaurantObj) => (
          <RestaurantCard
            key={restaurantObj.restaurant.id}
            resdata={restaurantObj.restaurant}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
