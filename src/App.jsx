import "./App.css";
import { Routes } from "react-router";
import { Route } from "react-router";
import Home from "./pages/Home/Home";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
