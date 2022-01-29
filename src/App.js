import { Route, Routes } from "react-router-dom";
import React from "react";
import Page from "./Page";
import AddPage from "./addPage";
import DetailPage from "./detailPage";
import './App.css';

function App() {
  
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/addpage" element={<AddPage />} />
          <Route path="/detailpage:index" element={<DetailPage />} />
        </Routes>
    </div>
  );
}


export default App;