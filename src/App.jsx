import React from "react";
import Headertop from "./pages/Headertop";
import Headerbottom from "./pages/Headerbottom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Hb from "./pages/Hb";
import Gallery from "./pages/Gallery";
import Shop from "./pages/Shop";
import Pages from "./pages/Pages";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";



function App() {
  return (
    <>
      {/* <Headertop></Headertop> */}
      {/* <Headerbottom></Headerbottom> */}
      {/* <Header></Header> */}
      {/* <Footer></Footer> */}
      {/* <About></About> */}
      {/* <Blog></Blog>   */}
      {/* <Hb></Hb> */}
      {/* <Gallery></Gallery> */}
      {/* <Shop></Shop> */}
      {/* <Pages></Pages> */}
   
    
      <Router>
        
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/gallery">
            <Gallery/>
          </Route>
          <Route path="/pages">
            <Pages/>
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
