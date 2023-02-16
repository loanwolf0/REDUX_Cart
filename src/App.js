import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/NAvbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route
          path="/" 
          element={<Home/>}
        />
        <Route
          path="/cart" 
          element={<Cart/>}
        />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

