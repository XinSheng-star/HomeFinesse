import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import data from "./data/data.json";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/services" render={() => <Services data={data} />} />
        <Route exact path="/gallery" render={() => <Gallery data={data} />} />
        <Route exact path="/contact" render={() => <Footer data={data} />} />
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Home data={data} />
              <Services data={data}></Services>
              <Gallery data={data} />
            </div>
          )}
        />
      </Switch>

      <footer>
        <Footer data={data} />
      </footer>
    </Router>
  );
}

export default App;
