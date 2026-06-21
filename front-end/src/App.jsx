import React from "react";
import BookCard from "./components/BookCard";
import LoginPage from "./pages/LoginPage";
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (<BrowserRouter>
      <Routes>
        {/* rota inicial */}
        <Route path="/" element={<LoginPage />} />
        
        {/* rota home - página principal após login */}
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;