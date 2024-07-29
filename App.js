import React from 'react';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './Components/navbar';
import ReviewsAndAdvisors from './Components/reviews';
import LargeImage from './Components/larimg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <div className="App">
      <Navbar />
      
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="row">
              <div className="col-12">
                <h1 className="ml-5 pl-5">Unlock Your Potential with<br /> onlineIB & IGCSE tutoring</h1>
                <hr className="yellow-line ml-5 pl-5" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="row">
              <div className="col-12">
                <p className="text-left ml-5 pl-5">We are here to get you the grades you need.</p>
                <button className="btn btn-yellow ml-5 pl-5">Get matched with your tutor</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-center">
            <LargeImage />
          </div>
        </div>
       
        <div className="row mt-5 bg-grey p-4">
          <div className="col-4">
            <h2>4.8/5</h2>
          </div>
          <div className="col-4">
            <h2>+10000</h2>
          </div>
          <div className="col-4">
            <h2>50000</h2>
          </div>
        </div>
       
      </div>
      <ReviewsAndAdvisors />
    </div>
  );
}

export default App;
