import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="Container">
      <h1>Welcome to Kitchen 001</h1>
      <div className="menu">
        <button type="button" class="btn btn-warning">Menu</button>
      </div>
      <div className="online-menu">
        <button type="button" class="btn btn-success">Online Menu</button>
      </div>
      <div className="reservations">
        <button type="button" class="btn btn-danger">Reservations</button>
      </div>
      <div className="pay">
        <button class="btn btn-dark">Click here to Pay</button>
      </div>
      <div className="socials">
        <span>Instagram</span>
        <span>Twitter</span>
        <span>Phone</span>
        <span>Email</span>
      </div>
      </div>
    </div>
  );
}

export default App;
