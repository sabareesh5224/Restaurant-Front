import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [menu, setMenu] = useState([
    {
      category: 'Breakfast',
      dishes: [
        { 
          name: 'Idli', 
          description: 'Steamed rice cakes', 
          price: '₹30', 
          image: 'https://www.kannammacooks.com/wp-content/uploads/soft-idli-batter-recipe-using-idli-rava-mixie-blender-method.jpg' 
        },
        { 
          name: 'Dosa', 
          description: 'Crispy rice and lentil crepe', 
          price: '₹40', 
          image: 'https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa.jpg' 
        },
      ],
    },
    {
      category: 'Lunch',
      dishes: [
        { 
          name: 'Sambar Rice', 
          description: 'Rice with lentil-based vegetable stew', 
          price: '₹60', 
          image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzUBLSqpp0gsvNvNBrsBS85Sc93JAVEHe0mgmO1d8D-opPCrwbXCh3PrHZzdFoxsMRAog_OZtFkFD1wk_V9B6Ubk-8ZQRtkNhfLD-15POh38jD1tVfVdKb1WEuC5NCOXaEPWpx4IwBacU/s1600/cabbage-sambar-recipe.jpg' 
        },
        { 
          name: 'Vegetable Biryani', 
          description: 'Rice with vegetables and spices', 
          price: '₹80', 
          image: 'https://www.madhuseverydayindian.com/wp-content/uploads/2022/11/easy-vegetable-biryani.jpg' 
        },
      ],
    },
    {
      category: 'Desserts',
      dishes: [
        { 
          name: 'Payasam', 
          description: 'Sweet pudding made with milk, sugar, and vermicelli', 
          price: '₹50', 
          image: 'https://images.getrecipekit.com/20231006064107-kerala-20special-20payasam.jpg?aspect_ratio=16:9&quality=90&' 
        },
        { 
          name: 'Adai', 
          description: 'Sweet pancake made with lentils and rice flour', 
          price: '₹40', 
          image: 'https://images.herzindagi.info/image/2024/Mar/south-indian-adai-dosa-recipe.jpg' 
        },
      ],
    },
    {
      category: 'Beverages',
      dishes: [
        { 
          name: 'Filter Coffee', 
          description: 'Traditional South Indian coffee', 
          price: '₹20', 
          image: 'https://www.kaipunnyam.com/cdn/shop/products/kaipunnyam-filter-coffee.jpg?v=1677041769' 
        },
        { 
          name: 'Peanut Milk', 
          description: 'Drink made with peanuts and milk', 
          price: '₹25', 
          image: 'https://i.ytimg.com/vi/NktxYhirfMw/maxresdefault.jpg' 
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dishes</h1>
      </header>
      <main>
        {menu.map((section, index) => (
          <div key={index} className="menu-section">
            <h2>{section.category}</h2>
            <ul>
              {section.dishes.map((dish, dishIndex) => (
                <li key={dishIndex} className="menu-item">
                  <img src={dish.image} alt={dish.name} className="dish-image" />
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                  <p className="price">{dish.price}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Menu;
