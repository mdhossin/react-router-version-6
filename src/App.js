import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import Navigation from "./components/Navigation/Navigation";
import ShowDetail from "./components/Services/ShowDetail";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PostOne from "./components/About/PostOne";
import PostTwo from "./components/About/PostTwo";
import PostThree from "./components/About/PostThree";
import PostFour from "./components/About/PostFour";
import Posts from "./components/About/Posts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          {/* nested routeing here connect to about page */}
          <Route path="/about" element={<About />}>
            <Route path="/about" element={<Posts />}></Route>
            <Route path="/about/post-1" element={<PostOne />}></Route>
            <Route path="/about/post-2" element={<PostTwo />}></Route>
            <Route path="/about/post-3" element={<PostThree />}></Route>
            <Route path="/about/post-4" element={<PostFour />}></Route>
          </Route>

          {/* get the single id user show the detial */}
          <Route path="/services" element={<Services />}></Route>
          <Route
            path="/service/:id"
            element={
              <PrivateRoute>
                <ShowDetail />
              </PrivateRoute>
            }
          ></Route>

          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
