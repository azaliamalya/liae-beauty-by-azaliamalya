"use client";

import { useCart } from "../../context/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ 
      backgroundColor: "#fff0f6", 
      minHeight: "100vh", 
      padding: "20px 20px",
      fontFamily: "'Poppins', sans-serif",
      display: "flex",
      justifyContent: "center"
    }}>
      <div style={{
        backgroundColor: "white",
        width: "80%",
        maxWidth: "350px",
        borderRadius: "40px",
        padding: "10px",
        boxShadow: "0 20px 50px rgba(255, 77, 148, 0.15)",
        textAlign: "center",
        height: "fit-content"
      }}>
        
        {/* HEADER */}
        <div style={{ marginBottom: "30px" }}>
          <div style={{ 
            fontSize: "40px", 
            background: "#fdf2f7", 
            width: "80px", 
            height: "80px", 
            lineHeight: "80px", 
            borderRadius: "50%", 
            margin: "0 auto 15px auto" 
          }}>
            💳
          </div>
          <h1 style={{ fontSize: "26px", fontWeight: "800", color: "#333", margin: 0 }}>
            Checkout
          </h1>
          <p style={{ fontSize: "12px", color: "#aaa", marginTop: "5px", letterSpacing: "1px" }}>
            LIAÉ BEAUTY 
          </p>
        </div>

        {/* LIST ITEM */}
        <div style={{ 
          textAlign: "left", 
          marginBottom: "30px",
          borderTop: "1px dashed #eee",
          borderBottom: "1px dashed #eee",
          padding: "20px 0"
        }}>
          {cart.length === 0 ? (
            <p style={{ textAlign: "center", color: "#bbb", fontSize: "14px" }}>Keranjang kamu masih kosong</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                marginBottom: "12px",
                fontSize: "14px"
              }}>
                <span style={{ color: "#555" }}>{item.name}</span>
                <span style={{ fontWeight: "600", color: "#333" }}>
                  Rp {item.price.toLocaleString("id-ID")}
                </span>
              </div>
            ))
          )}
        </div>

        {/* TOTAL BAYAR */}
        <div style={{ marginBottom: "30px" }}>
          <p style={{ fontSize: "12px", color: "#999", margin: 0, fontWeight: "500" }}>Total Bayar</p>
          <h2 style={{ 
            fontSize: "25px", 
            fontWeight: "800", 
            color: "#ff4d94", 
            margin: "5px 0" 
          }}>
            Rp {total.toLocaleString("id-ID")}
          </h2>
        </div>

        {/* TOMBOL BAYAR */}
        {cart.length > 0 && (
          <button
            style={{
              width: "90%",
              padding: "16px",
              backgroundColor: "#1db954", // Hijau yang lebih fresh (Spotify green)
              color: "white",
              border: "none",
              borderRadius: "20px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 10px 20px rgba(29, 185, 84, 0.2)",
              transition: "transform 0.2s ease"
            }}
            onClick={() => alert("Pembayaran Berhasil 💕 Thank you for shopping with LIAÉ!")}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Bayar Sekarang
          </button>
        )}

        <p style={{ fontSize: "11px", color: "#ccc", marginTop: "25px" }}>
          🔒 Secure Checkout • 100% Authentic Products
        </p>
      </div>
    </div>
  );
}