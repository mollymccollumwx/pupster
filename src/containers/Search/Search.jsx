import React, { Component } from 'react';
import axios from "axios";

class Search extends Component {

    state = {
        searchTerm: "",
    }

    componentDidMount() {
        this.displayBreeds();
    }

   displayBreeds = () => {
       const dogBreedsURL ="https://dog.ceo/api/breeds/list";

       axios.get(dogBreedsURL).then((res)=> {
           console.log(res.data.message);
       })
   }

   searchBreeds = () => {
       const searchBreed = `https://dog.ceo/api/breed/${this.state.searchTerm}/images`;
       axios.get(searchBreed).then((res)=> {
           console.log(res.data.message);
       })
   }

   handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBreeds(this.state.searchTerm);

  };


    render() {
        return (
            <div>
            <h1>Search Page</h1>
            <form>
              <div className="form-group">
                <label htmlFor="search">Search:</label>
                <input
                  onChange={this.handleInputChange}
                  value={this.state.searchTerm}
                  name="searchTerm"
                  type="text"
                  className="form-control"
                  placeholder="Search For a dog"
                  id="search"
                />
                <br />
                <button
                  onClick={this.handleFormSubmit}
                  className="btn btn-primary"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        );
    }
}

export default Search;