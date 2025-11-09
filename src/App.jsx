import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, Game, Settings, Rules } from "./pages";

export default function App() {
  return (
    <main className="bg-transparent">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </Router>
    </main>
  );
}
