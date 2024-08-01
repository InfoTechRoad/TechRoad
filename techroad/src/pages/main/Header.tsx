import React from "react";
import { Link } from "react-router-dom";

const headerStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  width: "100%",
  backgroundColor: "#282c34",
  padding: "20px",
  color: "white",
  zIndex: 1000,
  boxSizing: "border-box",
};

const headerContentStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center", // Flexbox 사용하여 수직 정렬
  width: "100%",
  maxWidth: "1200px", // 헤더 내용의 최대 너비를 설정
  margin: "0 auto", // 가운데 정렬
};

const h1Style: React.CSSProperties = {
  margin: 0, // 기본 마진 제거
  flex: 1, // Flexbox 사용
  textAlign: "left", // 좌측 정렬
};

const navStyle: React.CSSProperties = {
  marginRight: "20px", // 네비게이션 마진 조정
};

const linkStyle: React.CSSProperties = {
  color: "white",
  textDecoration: "none",
  margin: "0 10px",
};

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <div style={headerContentStyle}>
        <h1 style={h1Style}>Tech Road</h1>
        <nav style={navStyle}>
          <Link to="/user/register" style={linkStyle}>
            Register
          </Link>
          <Link to="/login" style={linkStyle}>
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
