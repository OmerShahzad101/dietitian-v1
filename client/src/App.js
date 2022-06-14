import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home";
import { Routes, Route, Link } from "react-router-dom";
import Privacy from "./components/Privacy_policy/Privacy"
import TermsAndCondition from "./components/TermsAndCondition/TermsAndCondition";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-condition" element={<TermsAndCondition />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
