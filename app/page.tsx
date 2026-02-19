export default function HomePage() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "10px 10px",
        background: "#ffe6f2",
        minHeight: "150vh",
        fontFamily: "Playfair Display, serif",
        fontSize: "10px",
      }}
    >
      <h1
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "30px",
          color: "#cc3366",
          marginBottom: "10px",
        }}
      >
        LIAÉ Beauty
      </h1>

      <p
        style={{
          color: "#ef5689",
          fontSize: "20px",
          marginBottom: "50px",
        }}
      >
        Be Pretty, Be You ˗ˏˋ ♡ ˎˊ˗
      </p>

      {/* --- BAGIAN FOTO PRODUK --- */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px", // Jarak antar foto
          flexWrap: "wrap", // Agar rapi saat dibuka di HP
        }}
      >
        {/* Foto Kiri */}
        <img
          src="/makeup2.jpg" // Ganti dengan nama file foto ke-2
          alt="Produk Kiri"
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "30%",
            objectFit: "cover",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            opacity: "0.8", // Efek sedikit pudar agar fokus ke tengah
          }}
        />

        {/* Foto Utama (Tengah) */}
        <img
          src="/makeup.jpg"
          alt="Makeup Utama"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "30%",
            objectFit: "cover",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          }}
        />

        {/* Foto Kanan */}
        <img
          src="/makeup3.jpg" // Ganti dengan nama file foto ke-3
          alt="Produk Kanan"
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "30%",
            objectFit: "cover",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            opacity: "0.8",
          }}
        />
      </div>
      {/* --------------------------- */}

      <br />

      <a
        href="/csr"
        style={{
          background: "#ff4d94",
          color: "white",
          padding: "14px 30px",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "500",
          letterSpacing: "1px",
          display: "inline-block",
          marginTop: "80px",
          boxShadow: "0 6px 15px rgba(255,77,148,0.4)",
        }}
      >
        SHOP NOW
      </a>
    </div>
  );
}