import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Responsive Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=Poppins:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        style={{
          margin: 0,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <CartProvider>
          <Navbar />

          {/* Content */}
          <main style={{ flex: 1 }}>
            {children}
          </main>

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}