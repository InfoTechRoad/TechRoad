import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../user/Login";

const mainContentStyle: React.CSSProperties = {
  marginTop: "80px",
  padding: "20px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  minHeight: "calc(100vh - 80px)",
};

const MainContent: React.FC = () => {
  return (
    <main style={mainContentStyle}>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
};

export default MainContent;
