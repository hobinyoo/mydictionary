import { Route, Routes } from "react-router-dom";
import React from "react";
import Page from "./Page";
import AddPage from "./addPage";


function App() {

  
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/addpage" element={<AddPage />} />
        </Routes>
    </div>
  );
}


export default App;