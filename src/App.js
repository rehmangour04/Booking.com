/** @format */

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import List from "./page/list/List";
import Hotel from "./page/hotel/Hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hotels" element={<List />}></Route>
        <Route path="/hotels/:id" element={<Hotel />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
