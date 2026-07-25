import { useState } from 'react';

const products = [
  { id: 1, title: 'Cabbage', price: 1.5, isFruit: false, popular: false },
  { id: 2, title: 'Garlic', price: 2.0, isFruit: false, popular: true },
  { id: 3, title: 'Apple', price: 3.25, isFruit: true, popular: true },
  { id: 4, title: 'Mango', price: 4.0, isFruit: true, popular: false },
];

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card" style={{ border: '1px solid black', padding: '10px', width: '120px' }}>
      <h3>{product.title}</h3>

      {/* Dynamic price color based on product type */}
      <p style={{ color: product.isFruit ? 'magenta' : 'darkgreen', fontWeight: 'bold' }}>
        ${product.price.toFixed(2)}
      </p>

      {/* Conditional rendering for the popular badge */}
      {product.popular && <p>⭐ Popular</p>}

      {/* Triggers the shared function passed from ShopApp */}
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default function ShopApp() {
  // Shared state to track the cart counter
  const [cartCount, setCartCount] = useState(0);

  // Function to increase the cart count
  function handleAddToCart() {
    setCartCount(cartCount + 1);
  }

  return (
    <div className="shop" style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Mini Fruit & Veg Stand</h1>

      {/* Cart Status Line (Remove button has been taken out) */}
      <div className="cart-status" style={{ marginBottom: '20px', fontWeight: 'bold' }}>
        {cartCount === 0 ? (
          <span>Cart is empty</span>
        ) : (
          <span>{cartCount} items in cart</span>
        )}
      </div>

      {/* Mapping through the products array to render ProductCards */}
      <div className="product-list" style={{ display: 'flex', gap: '15px' }}>
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={handleAddToCart} 
          />
        ))}
      </div>
    </div>
  );
}