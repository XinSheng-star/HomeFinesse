
import React from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import data from "./data/data.json";

function App() {
  return (

    <div>
    <Header />
    <Home data={data}/>
    <Services data={data}></Services>
    <Gallery data={data}/>

    <footer>
    
    <Footer data={data}/>
    </footer>

    </div>
    
    
  );
}

export default App;
