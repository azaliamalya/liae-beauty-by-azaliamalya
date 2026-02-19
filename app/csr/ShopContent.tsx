"use client";

import { useCart } from "../../context/CartContext";

const products = [
  { name: "Lipstick", price: 120000 },
  { name: "Foundation", price: 180000 },
  { name: "Blush On", price: 95000 },
  { name: "Mascara ", price: 110000 },
  { name: "Eyeliner ", price: 90000 }, 
  { name: "Eyeshadow ", price: 100000 },
  { name: "Highlighter ", price: 85000 },
  { name: "Brow Pomade ", price: 65000 },
  { name: "Compact Powder ", price: 60000 },
  { name: "Cushion ", price: 90000 },
  { name: "Concealer ", price: 55000 }, 
  { name: "Lip Cream ", price: 50000 }, 
  { name: "Loose Powder ", price: 55000 }, 
  { name: "Bronzer ", price: 40000 }, 
  { name: "Lip Tint ", price: 30000 },
  { name: "Lip Vinyl ", price: 45000 },
  { name: "Lip Liner ", price: 48000 },
  { name: "Lip Balm ", price: 20000 },
  { name: "Lip Crayon ", price: 40000 }, 
  { name: "Contour ", price: 35000 }, 
  { name: "Eyebrow ", price: 40000 }, 
  { name: "Lip Gloss ", price: 30000 }, 
  { name: "Setting Spray ", price: 50000 },
];

export default function Content() {
  const { cart, addToCart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>💕 Beauty Shop 💕</h1>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "30px"
      }}>
        {products.map((product, index) => (
          <div key={index} style={{
            background: "white",
            padding: "20px",
            borderRadius: "20px",
            width: "200px"
          }}>
            <h3>{product.name}</h3>
            <p style={{ color: "#ff3385" }}>
              Rp {product.price}
            </p>
            <button
              style={{
                background: "#ff66a3",
                color: "white",
                padding: "10px",
                border: "none",
                borderRadius: "20px",
                cursor: "pointer"
              }}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: "40px",
        background: "white",
        padding: "20px",
        borderRadius: "20px",
        display: "inline-block"
      }}>
        <h2>🛒 Cart</h2>

        {cart.length === 0 && <p>Cart masih kosong</p>}

        {cart.map((item, index) => (
          <div key={index}>
            {item.name} - Rp {item.price}
            <button
              style={{
                marginLeft: "10px",
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "10px",
                cursor: "pointer"
              }}
              onClick={() => removeFromCart(index)}
            >
              X
            </button>
          </div>
        ))}

        <h3 style={{ marginTop: "20px" }}>
          Total: Rp {total}
        </h3>
      </div>
    </div>
  );
}

