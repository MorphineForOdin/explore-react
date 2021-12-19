import { Routes, Route } from "react-router-dom";
import Footer from "./core/Footer";
import Header from "./core/Header";
import NotFound from "./core/NotFound";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}