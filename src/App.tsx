import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/Error Page/ErrorPage";
import Projects from "./pages/Projects/Projects";
import Footer from "./components/Footer/Footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
