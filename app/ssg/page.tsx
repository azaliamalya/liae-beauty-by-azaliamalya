"use client";

import { useState } from "react";

// 1. Definisi Tipe Data
type Product = {
  name: string;
  price: number;
  image: string;
  description: string;
};

const products: Product[] = [
  {
    name: "Primer",
    price: 45000,
    image: "/primer.jpg",
    description: "Primer ringan yang membantu menyamarkan pori-pori dan menghaluskan tekstur kulit sebelum makeup. Membuat foundation lebih menempel dan tahan lama, serta membantu mengontrol minyak berlebih.",
  },
  {
    name: "Lipstick",
    price: 120000,
    image: "/lipstick.jpg",
    description: "Lipstick dengan tekstur lembut dan ringan di bibir, memberikan warna intens hanya dalam sekali oles. Tahan lama, tidak membuat bibir kering, dan tersedia dalam berbagai shade cantik untuk daily maupun glam look. ",
  },
  {
    name: "Foundation",
    price: 180000,
    image: "/foundation.jpg",
    description: "Foundation ringan dengan coverage buildable yang mampu menyamarkan noda dan meratakan warna kulit. Hasil akhir natural, halus, dan tahan lama tanpa terasa berat di wajah. ",
  },
  {
    name: "Blush On",
    price: 95000,
    image: "/blush on.jpg",
    description: "Blush on pigmented dengan tekstur halus yang mudah dibaurkan. Memberikan efek pipi merona natural dan fresh sepanjang hari. ",
  },
  {
    name: "Mascara",
    price: 110000,
    image: "/mascara.jpg",
    description: "Mascara yang membuat bulu mata tampak lebih panjang, lentik, and bervolume tanpa menggumpal. Tahan lama dan tidak mudah luntur. ",
  },
  {
    name: "Eyeliner",
    price: 90000,
    image: "/eyeliner.jpg",
    description: "Eyeliner dengan warna hitam pekat dan ujung presisi untuk garis yang rapi dan tegas. Tahan lama dan tidak mudah smudge. ",
  },
  {
    name: "Eyeshadow",
    price: 100000,
    image: "/eyeshadow.jpg",
    description: "Eyeshadow dengan warna intens and mudah dibaurkan. Tersedia pilihan matte dan shimmer untuk tampilan natural hingga glam. ", 
  },
  {
    name: "Highlighter",
    price: 85000,
    image: "/highlighter.jpg",
    description: "Highlighter dengan kilau halus yang memberikan efek glowing natural. Mudah dibaurkan dan membuat wajah tampak lebih berdimensi. ",
  },
  {
    name: "Brow Pomade",
    price: 65000,
    image: "/brow pomade.jpg",
    description: "Brow pomade dengan tekstur creamy yang mudah diaplikasikan dan dibaurkan, membantu membentuk serta mengisi alis agar terlihat lebih tegas dan rapi. Pigmented, tahan lama, dan tidak mudah luntur, sehingga alis tetap on point seharian. ",
  },
  {
    name: "Compact Powder",
    price: 60000,
    image: "/compact powder.jpg",
    description: "Compact powder dengan butiran halus yang mampu mengontrol minyak berlebih dan membuat makeup lebih tahan lama. Memberikan hasil akhir matte yang natural tanpa membuat wajah terlihat cakey. ",
  },
  {
    name: "Cushion",
    price: 90000,
    image: "/cushion.jpg",
    description: "Cushion ringan dengan formula pelembap yang menyatu sempurna dengan kulit, memberikan coverage natural sekaligus menutupi noda dan kemerahan. Hasil akhir yang dewy membuat wajah tampak segar dan bercahaya sepanjang hari.",
  },
  {
    name: "Concealer",
    price: 55000,
    image: "/concealer.jpg",
    description:"Concealer dengan coverage medium to full yang efektif menyamarkan noda hitam, bekas jerawat, dan lingkaran bawah mata. Teksturnya ringan, mudah dibaurkan, dan tidak creasing. Memberikan hasil akhir smooth dan natural sehingga wajah tampak lebih flawless. ",
  },
  {
    name: "Lip Cream",
    price: 50000,
    image: "/lip cream.jpg",
    description: "Lip cream dengan tekstur creamy yang lembut dan ringan di bibir. Memberikan hasil akhir matte yang halus tanpa membuat bibir terasa kering. Pigmentasinya tinggi hanya dalam satu kali oles, serta tahan lama dan transferproof. ",
  },
  {
    name: "Loose Powder",
    price: 55000,
    image: "/loose powder.jpg",
    description:"Loose powder ringan dengan partikel ultra-halus yang membantu mengunci makeup lebih lama. Memberikan efek soft focus sehingga wajah terlihat lebih halus dan pori-pori tersamarkan. ",
  },
  {
    name: "Bronzer",
    price: 40000,
    image: "/bronzer.jpg",
    description: "Bronzer dengan tekstur halus dan mudah dibaurkan untuk memberikan efek wajah lebih hangat dan berdimensi. Memberikan tampilan sunkissed natural tanpa terlihat berlebihan. ", 
  },
  {
    name: "Lip Tint",
    price: 30000,
    image: "/lip tint.jpg",
    description: "Lip tint dengan formula watery yang ringan dan nyaman di bibir. Memberikan warna natural dan fresh dengan efek stain yang tahan lama. Tidak lengket dan tetap terasa ringan meskipun digunakan seharian. Cocok untuk tampilan no-makeup makeup look maupun Korean style look.",
  },
  {
    name: "Lip Vinyl",
    price: 45000,
    image: "/lip vinyl.jpg",
    description: "Lip vinyl dengan warna intens dan kilau tinggi, memberikan efek glossy yang tahan lama tanpa membuat bibir kering. Teksturnya lembut dan mudah diaplikasikan, cocok untuk tampilan bold dan modern.",
  },
  {
    name: "Lip Liner",
    price: 48000,
    image: "/lip liner.jpg",
    description: "Lip liner dengan ujung presisi yang mudah membentuk garis bibir, membantu menciptakan kontur sempurna dan mencegah lipstik melebar. Teksturnya lembut, pigmented, dan tahan lama, cocok untuk tampilan natural maupun bold.",
  },
  {
    name: "Lip Balm",
    price: 20000,
    image: "/lip balm.jpg",
    description: "Lip balm melembapkan dengan formula ringan yang menutrisi bibir kering sekaligus memberikan sentuhan kilau sehat. Ideal untuk digunakan sehari-hari, membuat bibir terasa lembut, halus, dan tampak segar.",
  },
  {
    name: "Lip Crayon",
    price: 40000,
    image: "/lip crayon.jpg",
    description: "Lip crayon multifungsi dengan pigmentasi tinggi dan hasil akhir matte atau satin. Mudah digunakan untuk membentuk kontur bibir, memberikan warna penuh sekaligus nyaman dipakai seharian tanpa retak.",
  },
  {
    name: "Contour",
    price: 35000,
    image: "/contour.jpg",
    description: "Contour dengan tekstur halus dan mudah dibaurkan untuk menciptakan dimensi wajah yang lebih tegas dan proporsional. Pigmentasi pas sehingga mudah dikontrol, cocok untuk pemula maupun profesional.",
  },
  {
    name: "Eyebrow",
    price: 40000,
    image: "/eyebrow.jpg",
    description: "Eyebrow dengan formula smooth dan presisi tinggi untuk membentuk alis yang rapi dan natural. Mudah diaplikasikan serta tahan lama tanpa mudah luntur. ",
  },
  {
    name: "Lip Gloss",
    price: 30000,
    image: "/lip gloss.jpg",
    description: "Lip gloss dengan tekstur lembut dan tidak lengket, memberikan efek kilau sehat dan bibir tampak lebih plump. Nyaman digunakan seharian dengan hasil akhir glossy yang fresh.",
  },
  {
    name: "Setting Spray",
    price: 50000,
    image: "/setting spray.jpg",
    description: "Setting spray dengan formula ringan yang membantu mengunci makeup agar lebih tahan lama. Memberikan hasil akhir fresh dan menyatu dengan kulit tanpa terasa lengket. Cocok digunakan sebelum atau sesudah makeup",
  }
];

export default function SSGPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div style={{ textAlign: "center", padding: "10px 20px", fontFamily: "'Poppins', sans-serif", backgroundColor: "#fff0f6" }}>
      
      <h1 style={{ fontSize: "25px", fontWeight: "bold", marginBottom: "20px" }}>
        Catalog Product
      </h1>

      <div style={{ maxWidth: "700px", margin: "0 auto 40px auto", color: "#555" }}>
        <p style={{ fontSize: "14px", lineHeight: "1.8", fontStyle: "italic" }}>
          "Menghadirkan kecantikan autentik melalui produk makeup berkualitas tinggi yang aman dan terpercaya. 
          Kami berkomitmen memberdayakan setiap individu untuk tampil percaya diri dengan sentuhan LIAÉ Beauty."
        </p>
      </div>

      <div
        style={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "30px",
            fontSize: "13px",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              width: "130px",
              background: "white",
              padding: "10px",
              borderRadius: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              onClick={() => setSelectedProduct(product)}
              style={{
               width: "100%",
                height: "140px",
                objectFit: "cover",
                borderRadius: "15px"
            }}
            />
            <h3 style={{ marginTop: "12px", fontSize: "14px", fontWeight: "600" }}>
              {product.name}
            </h3>
            <p style={{ color: "#ff4d94", fontWeight: "bold", marginTop: "5px" }}>
              Rp {product.price.toLocaleString("id-ID")}
            </p>
          </div>
        ))}
      </div>

      {/* MODAL DETAIL - VERSI KECIL TANPA SCROLL */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            padding: "20px"
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              padding: "7px", 
              borderRadius: "20px",
              width: "240px", // Lebar kotak kecil
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              marginBottom: "40px"
            }}
          >
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              style={{
                width: "120px", // Ukuran gambar dikecilkan agar hemat tempat
                height: "120px",
                objectFit: "cover",
                borderRadius: "15px",
                margin: "0 auto"
              }}
            />

            <h2 style={{ marginTop: "12px", fontSize: "18px", color: "#333", fontWeight: "bold" }}>
              {selectedProduct.name}
            </h2>

            <p style={{ marginTop: "8px", fontSize: "12px", color: "#666", lineHeight: "1.4" }}>
              {selectedProduct.description}
            </p>

            <p style={{ fontWeight: "bold", fontSize: "16px", marginTop: "10px", color: "#ff4d94" }}>
              Rp {selectedProduct.price.toLocaleString("id-ID")}
            </p>

            <button
              onClick={() => setSelectedProduct(null)}
              style={{
                marginTop: "15px",
                background: "#ff4d94",
                color: "white",
                border: "none",
                borderRadius: "50px",
                padding: "5px 0",
                fontSize: "10px",
                fontWeight: "bold",
                cursor: "pointer",
                width: "100%"
              }}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}