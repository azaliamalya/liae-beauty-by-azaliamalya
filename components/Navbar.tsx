"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const baseLinkStyle = {
    textDecoration: "none",
    fontWeight: "600",
    fontFamily: "Playfair Display, serif", 
  };

  const activeColor = "rgb(131, 9, 57)";
  const normalColor = "#ffe6f2";

  const getLinkStyle = (href: string) => ({
    ...baseLinkStyle,
    color: pathname === href ? activeColor : normalColor,
  });

  return (
    <nav
      style={{
        padding: "10px 16px",
        background: "#ff4d94",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* LOGO */}
      <Link href="/">
        <img
          src="/logo.jpg"
          alt="LIAÉ Beauty"
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </Link>

      {/* HAMBURGER BUTTON */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "transparent",
          border: "none",
          fontSize: "24px",
          color: "white",
          cursor: "pointer",
          display: "none",
        }}
        className="menu-btn"
      >
        ☰
      </button>

      {/* MENU */}
      <div
        className={`menu ${menuOpen ? "open" : ""}`}
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <Link href="/" style={getLinkStyle("/")}>
          HOME
        </Link>
        <Link href="/ssg" style={getLinkStyle("/ssg")}>
          CATALOG
        </Link>
        <Link href="/ssr" style={getLinkStyle("/ssr")}>
          ABOUT
        </Link>
        <Link href="/csr" style={getLinkStyle("/csr")}>
          PRODUCT
        </Link>
      </div>

      {/* CART */}
      <Link
        href="/checkout"
        style={{
          background: "white",
          color: "#ff4d94",
          padding: "8px 12px",
          borderRadius: "20px",
          textDecoration: "none",
          fontWeight: "600",
          whiteSpace: "nowrap",
        }}
      >
        🛒 Cart ({cart.length})
      </Link>

      {/* STYLE RESPONSIVE */}
      <style jsx>{`
        @media (max-width: 768px) {
          .menu-btn {
            display: block;
          }

          .menu {
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background: #ff4d94;
            flex-direction: column;
            gap: 15px;
            padding: 15px 0;
            display: none;
            text-align: center;
          }

          .menu.open {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
}
