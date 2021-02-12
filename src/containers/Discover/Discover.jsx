import React, { Component } from "react";
import axios from "axios";



class Discover extends Component {

state = {
  dogImageUrl: "",
  dogsThatLikeYou: 0,
  dogsThatYouLike: 0
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

handleLike = () => {
    const randomNum = Math.floor(Math.random()*5);

    if (randomNum === 4){
        this.setState({ dogsThatLikeYou: this.state.dogsThatLikeYou + 1});
    }
    this.setState({ dogsThatYouLike: this.state.dogsThatYouLike + 1});
    this.displayDog();
};

handleUnlike = () => {
    this.displayDog();
}
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
            <button className="btn btn-danger" onClick={this.handleUnlike}>Dislike</button>
          </div>
          <div className="col-sm-3 d-flex justify-content-end">
            <button className="btn btn-success" onClick={this.handleLike}>Like</button>
          </div>
          <h5>Dogs that like you: {this.state.dogsThatLikeYou} </h5>
          <h5>Dogs that you've liked: {this.state.dogsThatYouLike} </h5>
        </div>
      </div>
    );
  }
}

export default Discover;
