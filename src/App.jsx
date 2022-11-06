import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditorPage from "./pages/EditorPage";
import Home from "./pages/Home";
import "./index.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor/:roomId" element={<EditorPage />} />
      </Routes>
      <Toaster
        containerStyle={{
          fontSize: "0.85rem",
          fontWeight: 600,
        }}
        position="top-right"
      />
    </Router>
  );
}

export default App;
