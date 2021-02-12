import React, { Component } from "react";
import axios from "axios";



class Discover extends Component {

state = {
  dogImageUrl: "",
};

componentDidMount(){
    this.displayDog();
};

displayDog = () => {
  const BASEURL = "https://dog.ceo/api/breeds/image/random";
  axios.get(BASEURL).then((res) => {
    this.setState({ dogImageUrl: res.data.message });
  });
};

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Discover Doggos</h1>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img
              alt="a very good boy"
              src={this.state.dogImageUrl}
              style={{ height: 400 }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-3 d-flex justify-content-start">
            <button className="btn btn-danger">Dislike</button>
          </div>
          <div className="col-sm-3 d-flex justify-content-end">
            <button className="btn btn-success">Like</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Discover;
