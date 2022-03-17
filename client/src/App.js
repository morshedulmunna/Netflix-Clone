import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
// import Watch from "./pages/watch/Watch";
// import Register from "./pages/register/Ragister";
// import Login from "./pages/login/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Home type="movies" />} />
        <Route path="/series" element={<Home type="series" />} />
      </Routes>
    </>
  );
}
export default App;
