import React, { Component } from "react";
import axios from "axios";

class Discover extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Discover Doggos</h1>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img
              alt="a very good boy"
              src="https://images.dog.ceo/breeds/cockapoo/Scout.jpg" style={{height: 400}}
            />
          </div>
        </div>
        <div className="row">
            <div className="col-sm-3"></div>
          <div className="col-sm-3 d-flex justify-content-start">
            <button className="btn btn-danger">
              Dislike
            </button>
          </div>
          <div className="col-sm-3 d-flex justify-content-end">
            <button className="btn btn-success">
              Like
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Discover;
