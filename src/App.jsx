import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import CreateThreadsPage from "./pages/CreateThreadsPage";
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home/>}/>
        <Route path={`/CreateThreadsPage`} element={<CreateThreadsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
