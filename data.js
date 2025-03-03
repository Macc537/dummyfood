const originaldata = [
    {
      "restaurant": {
        "id": "229343",
        "name": "Pizza Palace",
        "cuisine": ["Italian", "Wood-fired Pizzas"],
        "rating": 4.6,
        "deliveryTime": "35 mins",
        "image": "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=508&h=320&q=80",
        "address": "Sector 34, Chandigarh",
        "contact": null,
        "menu": [
          {
            "id": "330819230",
            "name": "Margherita Classic",
            "price": 299,
            "category": "Wood-fired Pizzas",
            "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=208&h=208&q=80"
          },
          {
            "id": "330819231",
            "name": "Pepperoni Feast",
            "price": 399,
            "category": "Specialty Pizzas",
            "image": "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=208&h=208&q=80"
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
        "image": "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&w=508&h=320&q=80",
        "address": "Elante Mall, Chandigarh",
        "contact": null,
        "menu": [
          {
            "id": "440912345",
            "name": "Dragon Roll",
            "price": 499,
            "category": "Signature Rolls",
            "image": "https://images.unsplash.com/photo-1617196035154-1ed7f6ac6e4b?auto=format&fit=crop&w=208&h=208&q=80"
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
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=508&h=320&q=80",
        "address": "Sector 22 Market, Chandigarh",
        "contact": null,
        "menu": [
          {
            "id": "550123456",
            "name": "Butter Chicken",
            "price": 299,
            "category": "Curry Specials",
            "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=208&h=208&q=80"
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
        "image": "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=508&h=320&q=80",
        "address": "Sector 8, Chandigarh",
        "contact": null,
        "menu": [
          {
            "id": "660789012",
            "name": "Grande Burrito Bowl",
            "price": 249,
            "category": "Meal Bowls",
            "image": "https://images.unsplash.com/photo-1558199141-391d935676f0?auto=format&fit=crop&w=208&h=208&q=80"
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
        "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=508&h=320&q=80",
        "address": "Manimajra, Chandigarh",
        "contact": null,
        "menu": [
          {
            "id": "770890123",
            "name": "Hakka Noodles",
            "price": 179,
            "category": "Noodle Specials",
            "image": "https://images.unsplash.com/photo-1555126634-323283a090fa?auto=format&fit=crop&w=208&h=208&q=80"
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
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=508&h=320&q=80",
        "address": "Industrial Area, Chandigarh",
        "contact": null,
        "menu": [
          {
            "id": "880901234",
            "name": "Barn Special Double Patty",
            "price": 219,
            "category": "Signature Burgers",
            "image": "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=208&h=208&q=80"
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
        "image": "https://images.unsplash.com/photo-1557925923-cd4648e211a0?auto=format&fit=crop&w=508&h=320&q=80",
        "address": "Sector 17 Plaza, Chandigarh",
        "contact": null,
        "menu": [
          {
            "id": "990123456",
            "name": "Red Velvet Cake",
            "price": 149,
            "category": "Cake Slices",
            "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=208&h=208&q=80"
          }
        ]
      }
    },
    // Additional entries remain the same as your previous version
    {
      "restaurant": {
        "id": "229350",
        "name": "Spice Trail",
        "cuisine": ["South Indian", "Kerala"],
        "rating": 4.5,
        "deliveryTime": "30 mins",
        "image": "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=508&h=320&q=80",
        "address": "Sector 44, Chandigarh",
        "contact": null,
        "menu": [
          {
            "id": "110123456",
            "name": "Masala Dosa",
            "price": 129,
            "category": "Breakfast Specials",
            "image": "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=208&h=208&q=80"
          }
        ]
      }
    },
    {
      "restaurant": {
        "id": "229351",
        "name": "Thai Orchid",
        "cuisine": ["Thai", "Asian"],
        "rating": 4.7,
        "deliveryTime": "40 mins",
        "image": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=508&h=320&q=80",
        "address": "Sector 26, Chandigarh",
        "contact": null,
        "menu": [
          {
            "id": "220234567",
            "name": "Tom Yum Soup",
            "price": 199,
            "category": "Thai Specialties",
            "image": "https://images.unsplash.com/photo-1552466851-a530785a3f1a?auto=format&fit=crop&w=208&h=208&q=80"
          }
        ]
      }
    },
    {
      "restaurant": {
        "id": "229352",
        "name": "Burger Bistro",
        "cuisine": ["American", "Fast Food"],
        "rating": 4.3,
        "deliveryTime": "25 mins",
        "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=508&h=320&q=80",
        "address": "Sector 35, Chandigarh",
        "contact": null,
        "menu": [
          {
            "id": "330345678",
            "name": "Truffle Mushroom Burger",
            "price": 279,
            "category": "Gourmet Burgers",
            "image": "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=208&h=208&q=80"
          }
        ]
      }
    },
    {
      "restaurant": {
        "id": "229353",
        "name": "Delhi Darbar",
        "cuisine": ["North Indian", "Mughlai"],
        "rating": 2.4,
        "deliveryTime": "35 mins",
        "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=508&h=320&q=80",
        "address": "Sector 19, Chandigarh",
        "contact": null,
        "menu": [
          {
            "id": "440456789",
            "name": "Dal Makhani",
            "price": 189,
            "category": "Lentil Specials",
            "image": "https://images.unsplash.com/photo-1546392793-3b723f64be0a?auto=format&fit=crop&w=208&h=208&q=80"
          }
        ]
      }
    },
    {
      "restaurant": {
        "id": "229354",
        "name": "Cafe Coffee Heaven",
        "cuisine": ["Beverages", "Cafe"],
        "rating": 2.6,
        "deliveryTime": "20 mins",
        "image": "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=508&h=320&q=80",
        "address": "Sector 9, Chandigarh",
        "contact": null,
        "menu": [
          {
            "id": "550567890",
            "name": "Caramel Macchiato",
            "price": 159,
            "category": "Coffee Selection",
            "image": "https://images.unsplash.com/photo-1534685785743-600733e171d0?auto=format&fit=crop&w=208&h=208&q=80"
          }
        ]
      }
    }
  ];
  
  export default originaldata;
  