import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // 1. Import komponen Footer
import { CartProvider } from "../context/CartContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=Poppins:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>

      <body style={{ margin: 0, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <CartProvider>
          <Navbar />
          
          {/* Main content akan mengambil ruang sisa agar footer tetap di bawah */}
          <main style={{ flex: 1 }}>
            {children}
          </main>

          <Footer /> {/* 2. Letakkan Footer di sini */}
        </CartProvider>
      </body>
    </html>
  );
}