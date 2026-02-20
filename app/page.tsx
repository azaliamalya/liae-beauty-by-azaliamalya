export default function HomePage() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px 20px",
        background: "#ffe6f2",
        minHeight: "100vh",
        fontFamily: "Playfair Display, serif",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(26px, 5vw, 36px)", // responsive font
          color: "#cc3366",
          marginBottom: "10px",
        }}
      >
        LIAÉ Beauty
      </h1>

      <p
        style={{
          color: "#ef5689",
          fontSize: "clamp(16px, 3vw, 20px)", // responsive font
          marginBottom: "40px",
        }}
      >
        Be Pretty, Be You ˗ˏˋ ♡ ˎˊ˗
      </p>

      {/* FOTO PRODUK */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Foto Kiri */}
        <img
          src="/makeup2.jpg"
          alt="Produk Kiri"
          style={{
            width: "clamp(120px, 30vw, 180px)",
            height: "clamp(120px, 30vw, 180px)",
            borderRadius: "30%",
            objectFit: "cover",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            opacity: "0.8",
          }}
        />

        {/* Foto Tengah */}
        <img
          src="/makeup.jpg"
          alt="Makeup Utama"
          style={{
            width: "clamp(180px, 40vw, 260px)",
            height: "clamp(180px, 40vw, 260px)",
            borderRadius: "30%",
            objectFit: "cover",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          }}
        />

        {/* Foto Kanan */}
        <img
          src="/makeup3.jpg"
          alt="Produk Kanan"
          style={{
            width: "clamp(120px, 30vw, 180px)",
            height: "clamp(120px, 30vw, 180px)",
            borderRadius: "30%",
            objectFit: "cover",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            opacity: "0.8",
          }}
        />
      </div>

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
          marginTop: "60px",
          boxShadow: "0 6px 15px rgba(255,77,148,0.4)",
        }}
      >
        SHOP NOW
      </a>
    </div>
  );
}