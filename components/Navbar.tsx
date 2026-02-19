"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // untuk deteksi path
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const pathname = usePathname(); // path saat ini

  const baseLinkStyle = {
    textDecoration: "none",
    fontWeight: "600",
  };

  const activeColor = "rgb(131, 9, 57)"; // warna text saat aktif
  const normalColor = "#ffe6f2"; // warna text biasa

  // fungsi untuk menentukan style berdasarkan aktif atau tidak
  const getLinkStyle = (href: string) => ({
    ...baseLinkStyle,
    color: pathname === href ? activeColor : normalColor,
  });

  return (
    <nav
      style={{
        padding: "0px 3px",
        background: "#ff4d94",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "14px",
      }}
    >
      {/* LOGO KIRI */}
      <Link href="/">
        <img
          src="/logo.jpg"
          alt="LIAÉ Beauty"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            objectFit: "cover",
            padding: "10px",
          }}
        />
      </Link>

      {/* MENU */}
      <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
        <Link href="/" style={getLinkStyle("/")}>HOME</Link>
        <Link href="/ssg" style={getLinkStyle("/ssg")}>CATALOG</Link>
        <Link href="/ssr" style={getLinkStyle("/ssr")}>ABOUT</Link>
        <Link href="/csr" style={getLinkStyle("/csr")}>PRODUCT</Link>
      </div>

      {/* CART */}
      <Link
        href="/checkout"
        style={{
          background: "white",
          color: "#ff4d94",
          padding: "8px 10px",
          borderRadius: "20px",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        🛒 Cart ({cart.length})
      </Link>
    </nav>
  );
}
