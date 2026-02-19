"use client";

import Link from "next/link";

export default function Footer() {
  const iconBoxStyle = {
    width: "36px",
    height: "36px",
    backgroundColor: "rgba(255, 77, 148, 0.1)", // Pink sangat transparan
    borderRadius: "50%", // Bulat agar beda dari yang lain
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.3s",
    cursor: "pointer",
    border: "1px solid rgba(255, 77, 148, 0.2)",
  };

  return (
    <footer style={{
      backgroundColor: "#fff0f6", // Background dasar soft pink, bukan pink tua
      padding: "80px 40px 30px 40px",
      fontFamily: "'Poppins', sans-serif",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Dekorasi lingkaran blur di background agar estetik */}
      <div style={{
        position: "absolute",
        top: "-50px",
        right: "-50px",
        width: "200px",
        height: "200px",
        backgroundColor: "rgba(255, 77, 148, 0.1)",
        borderRadius: "50%",
        filter: "blur(50px)"
      }}></div>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        maxWidth: "1100px",
        margin: "0 auto",
        gap: "40px",
        position: "relative",
        zIndex: 1
      }}>
        
        {/* KOLOM 1: BRAND - Dibuat lebih elegan */}
        <div style={{ flex: "1.5", minWidth: "280px" }}>
          <h2 style={{ 
            fontSize: "24px", 
            fontWeight: "800", 
            marginBottom: "15px", 
            color: "#ff4d94",
            letterSpacing: "2px" 
          }}>
            LIAÉ BEAUTY
          </h2>
          <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#666", maxWidth: "300px" }}>
            Katalog makeup curated dengan cermat, menghadirkan pilihan produk yang mendukung rutinitas kecantikan sehari-hari. Setiap item dipilih untuk kualitas, tren, dan hasil yang memukau, sehingga menemukan kecantikan diri kini lebih praktis dan menyenangkan.
          </p>
        </div>

        {/* KOLOM 2: LINKS - Minimalist Style */}
        <div style={{ flex: "1", minWidth: "150px" }}>
          <h3 style={{ fontSize: "12px", fontWeight: "bold", marginBottom: "20px", color: "#333", letterSpacing: "1px" }}>QUICK LINKS</h3>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "14px", lineHeight: "2" }}>
            <li><Link href="/" style={{ color: "#666", textDecoration: "none" }}>Home</Link></li>
            <li><Link href="/ssg" style={{ color: "#666", textDecoration: "none" }}>Catalog</Link></li>
            <li><Link href="/ssr" style={{ color: "#666", textDecoration: "none" }}>About Us</Link></li>
          </ul>
        </div>

        {/* KOLOM 3: SOCIAL - Posisi Horizontal Modern */}
        <div style={{ flex: "1", minWidth: "150px" }}>
          <h3 style={{ fontSize: "12px", fontWeight: "bold", marginBottom: "20px", color: "#333", letterSpacing: "1px" }}>FOLLOW US</h3>
          <div style={{ display: "flex", gap: "12px" }}>
            <a href="https://instagram.com/azaliaam_" target="_blank" style={iconBoxStyle}>
              <img src="/logo-ig.png" style={{ width: "18px" }} />
            </a>
            <a href="https://tiktok.com/@url4fff" target="_blank" style={iconBoxStyle}>
              <img src="/logo-tiktok.png" style={{ width: "18px" }} />
            </a>
            <a href="https://www.youtube.com/@azaliaalyaa" target="_blank" style={iconBoxStyle}>
              <img src="/logo-youtube.png" style={{ width: "18px" }} />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT - Dibuat Minimalis di Pojok/Tengah */}
      <div style={{
        marginTop: "80px",
        borderTop: "1px solid rgba(0,0,0,0.05)",
        paddingTop: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "11px",
        color: "#999",
        letterSpacing: "1px"
      }}>
        © 2026 LIAÉ BEAUTY — YOUR BEAUTY PARTNER.
      </div>
    </footer>
  );
}