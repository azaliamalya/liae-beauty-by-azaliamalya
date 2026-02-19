"use client"; 

import { useCart } from "../../context/CartContext";

const products = [
  { name: "Primer ", price: 45000, image: "/primer.jpg" },
  { name: "Lipstick", price: 120000, image: "/lipstick.jpg" },
  { name: "Foundation", price: 180000, image: "/foundation.jpg" },
  { name: "Blush On", price: 95000, image: "/blush on.jpg" },
  { name: "Mascara ", price: 110000,image: "/mascara.jpg" },
  { name: "Eyeliner ", price: 90000, image: "/eyeliner.jpg" },
  { name: "Eyeshadow ", price: 100000,image: "/eyeshadow.jpg" },
  { name: "Highlighter ", price: 85000, image: "/highlighter.jpg" },
  { name: "Brow Pomade ", price: 65000, image: "/brow Pomade.jpg" },
  { name: "Compact Powder ", price: 60000, image: "/compact powder.jpg" },
  { name: "Cushion ", price: 90000, image: "/cushion.jpg" },
  { name: "Concealer ", price: 55000, image: "/concealer.jpg" },
  { name: "Lip Cream ", price: 50000, image: "/lip cream.jpg" },
  { name: "Loose Powder ", price: 55000, image: "/loose powder.jpg" },
  { name: "Bronzer ", price: 40000, image: "/bronzer.jpg" },
  { name: "Lip Tint ", price: 30000, image: "/lip tint.jpg" },
  { name: "Lip Vinyl ", price: 45000, image: "/lip vinyl.jpg" },
  { name: "Lip Liner ", price: 48000, image: "/lip liner.jpg" },
  { name: "Lip Balm ", price: 20000, image: "/lip balm.jpg" },
  { name: "Lip Crayon ", price: 40000, image: "/lip crayon.jpg" },
  { name: "Contour ", price: 35000, image: "/contour.jpg" },
  { name: "Eyebrow ", price: 40000, image: "/eyebrow.jpg" },
  { name: "Lip Gloss ", price: 30000, image: "/lip gloss.jpg" },
  { name: "Setting Spray ", price: 50000, image: "/setting spray.jpg" },
];

export default function ShopPage() {
  const { cart, addToCart, removeFromCart, discount } = useCart();

  const total = cart.reduce((sum, item) => {
    const discountedPrice = item.price - (item.price * discount) / 100;
    return sum + discountedPrice;
  }, 0);

  return (
    <div style={{ textAlign: "center", padding: "40px 20px", backgroundColor: "#fff5f8", minHeight: "100vh", fontFamily: "'Poppins', sans-serif" }}>
      <h1 style={{ color: "#333", fontSize: "28px", marginBottom: "10px" }}>♡ Beauty Shop ♡</h1>

      {discount > 0 && (
        <div style={{ display: "inline-block", backgroundColor: "#e8f5e9", color: "#2e7d32", padding: "5px 15px", borderRadius: "50px", fontSize: "12px", fontWeight: "600", marginBottom: "20px" }}>
          Diskon aktif: {discount}% OFF ✨
        </div>
      )}

      <div style={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "30px",
            fontSize: "13px"
      }}>
        {products.map((product, index) => (
          <div key={index} style={{
              width: "130px",
              background: "white",
              padding: "10px",
              borderRadius: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              textAlign: "center",
          }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "140px",
                objectFit: "cover",
                borderRadius: "15px"
              }}
            />

            <h3 style={{ fontSize: "14px", color: "#444", margin: "5px 0" }}>{product.name}</h3>

            <div style={{ margin: "10px 0" }}>
              {discount > 0 ? (
                <>
                  <p style={{ textDecoration: "line-through", color: "#bbb", fontSize: "11px", margin: 0 }}>
                    Rp {product.price.toLocaleString("id-ID")}
                  </p>
                  <p style={{ color: "#ff4d94", fontWeight: "bold", fontSize: "15px", margin: 0 }}>
                    Rp {Math.floor(product.price - (product.price * discount) / 100).toLocaleString("id-ID")}
                  </p>
                </>
              ) : (
                <p style={{ color: "#333", fontWeight: "600", fontSize: "15px", margin: 0 }}>
                  Rp {product.price.toLocaleString("id-ID")}
                </p>
              )}
            </div>

            <button
              onClick={() => addToCart(product)}
              style={{
                background: "#ff66a3",
                color: "white",
                padding: "10px",
                border: "none",
                borderRadius: "15px",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: "600",
                width: "100%",
                marginTop: "10px"
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* CART SECTION */}
      <div style={{ 
        marginTop: "60px", 
        background: "white", 
        padding: "30px", 
        borderRadius: "30px", 
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        display: "inline-block",
        minWidth: "320px"
      }}>
        <h2 style={{ fontSize: "20px", marginBottom: "20px" }}>🛒 Keranjang</h2>

        {cart.length === 0 ? (
          <p style={{ color: "#aaa" }}>Keranjang masih kosong</p>
        ) : (
          cart.map((item, index) => {
            const discountedPrice = item.price - (item.price * discount) / 100;
            return (
              <div key={index} style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                padding: "10px 0", 
                borderBottom: "1px solid #f9f9f9" 
              }}>
                <span style={{ fontSize: "13px", color: "#555" }}>{item.name}</span>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ fontWeight: "bold", fontSize: "13px" }}>
                    Rp {Math.floor(discountedPrice).toLocaleString("id-ID")}
                  </span>
                  <button
                    onClick={() => removeFromCart(index)}
                    style={{
                      marginLeft: "15px",
                      background: "#ffeeee",
                      color: "#ff4d4d",
                      border: "none",
                      borderRadius: "8px",
                      padding: "4px 8px",
                      fontSize: "10px",
                      cursor: "pointer"
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })
        )}

        <h3 style={{ marginTop: "25px", borderTop: "2px dashed #eee", paddingTop: "15px", color: "#333" }}>
          Total: Rp {Math.floor(total).toLocaleString("id-ID")}
        </h3>
      </div>
    </div>
  );
}