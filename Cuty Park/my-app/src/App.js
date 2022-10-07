import "./css/style.modules.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main/Main";
import NotFound from "./components/PageNotFound/index"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
