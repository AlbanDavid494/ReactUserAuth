import Login from "../src/component/Login";
import Register from "../src/component/Register";
import Profile from "../src/component/Profile";
import Layout from "./component/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Login></Login>}></Route>
          <Route path="/signup" element={<Register></Register>} ></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App