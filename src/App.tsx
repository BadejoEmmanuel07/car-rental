import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ano.css';
import Footer from "./components/Footer";
import Testimonial from './components/Testimonial';
import About from './components/About';
import Model from "./components/VehincleModel";
import Team from './components/Team';
import Contact from './components/Contact';

import React, { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => (
  <React.Fragment>
    <Header />
    {children}
    <Footer />
  </React.Fragment>
);


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/team" element={<Layout><Team /></Layout>} />
        <Route path="/model" element={<Layout><Model /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/testimonial" element={<Layout><Testimonial /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
