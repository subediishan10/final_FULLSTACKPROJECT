import "./App.css";
import Home from "./home/Home";

import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contacts from "./contacts/Contacts";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Abouts from "./abouts/Abouts";
import Categories from "./categories/Categories";
import Carts from "./carts/carts";
import CategoryBooks from "./components/CategoryBooks";
function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/courses"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:categoryName" element={<CategoryBooks />} />
        <Route path="/cart" element={<Carts />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
