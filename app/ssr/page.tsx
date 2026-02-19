export default function AboutPage() {
  // Menghasilkan diskon acak antara 10% - 60%
  const discount = Math.floor(Math.random() * 50) + 10;

  return (
    <div style={{ 
      textAlign: "center", 
      padding: "20px 20px", 
      backgroundColor: "#fff0f6", 
      minHeight: "100vh",
      fontFamily: "'Poppins', sans-serif" 
    }}>
      
      {/* SECTION 1: PROMO KECIL (Agar tidak kaku) */}
      <div style={{
        backgroundColor: "#ffffff",
        maxWidth: "600px",
        margin: "0 auto 50px auto",
        padding: "15px",
        borderRadius: "30px",
        boxShadow: "0 10px 30px rgba(255, 77, 148, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px"
      }}>
        <div style={{ textAlign: "left" }}>
          <h2 style={{ fontSize: "18px", color: "#333", margin: 0 }}>Special Gift! 🎁</h2>
          <p style={{ fontSize: "12px", color: "#888", margin: "5px 0 0 0" }}>Potongan otomatis di halaman katalog.</p>
        </div>
        <div style={{
          backgroundColor: "#ff4d94",
          color: "white",
          padding: "10px 10px",
          borderRadius: "15px",
          fontWeight: "bold",
          fontSize: "15px"
        }}>
          -{discount}%
        </div>
      </div>

      {/* SECTION 2: BRAND STORY & FOUNDER'S NOTE */}
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", marginBottom: "60px" }}>
        <h1 style={{ fontSize: "18px", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>
          Behind LIAÉ Beauty
        </h1>
        <p style={{ 
          fontSize: "13px", 
          lineHeight: "1.8", 
          color: "#666", 
          fontStyle: "italic",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "20px",
          borderLeft: "5px solid #ff4d94"
        }}>
          "LIAÉ Beauty lahir dari mimpi sederhana: menciptakan makeup yang terasa seperti kulit kedua. Kami percaya bahwa kecantikan bukan tentang menutupi, tetapi tentang merayakan cahaya yang sudah ada di dalam dirimu. Setiap produk yang kami pilih adalah surat cinta untuk kepercayaan dirimu."
          <br/>
          <span style={{ display: "block", marginTop: "15px", fontWeight: "bold", color: "#ff4d94", fontStyle: "normal" }}>
            — LIAÉ Beauty
          </span>
        </p>
      </div>

      {/* SECTION 3: OUR VALUES (Bikin Gak Kaku) */}
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: "20px", 
        flexWrap: "wrap", 
        maxWidth: "1000px", 
        margin: "0 auto" 
      }}>
        {[
          { icon: "✨", title: "Skin First", desc: "Formulasi yang menutrisi kulit." },
          { icon: "🐰", title: "Cruelty Free", desc: "Tanpa uji coba pada hewan." },
          { icon: "💖", title: "Inclusive", desc: "Diciptakan untuk semua warna kulit." }
        ].map((value, index) => (
          <div key={index} style={{
            background: "white",
            padding: "25px",
            borderRadius: "25px",
            width: "200px",
            textAlign: "center",
            boxShadow: "0 5px 15px rgba(0,0,0,0.02)"
          }}>
            <div style={{ fontSize: "30px", marginBottom: "10px" }}>{value.icon}</div>
            <h3 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "8px", color: "#333" }}>{value.title}</h3>
            <p style={{ fontSize: "12px", color: "#888", lineHeight: "1.5" }}>{value.desc}</p>
          </div>
        ))}
      </div>

      {/* FOOTER KECIL ABOUT */}
      <p style={{ marginTop: "60px", fontSize: "13px", color: "#9b054d", letterSpacing: "1px" }}>
        JOIN THE #LIAEGLOWSQUAD
      </p>

    </div>
  );
}


