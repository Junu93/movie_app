import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state = {

  }

  componentDidMount(){
    this._getMovies();
    console.log('comonent did mount')
  }

  _renderMovies = () => {
    {
      const movies = this.state.movies.map(movie => {
        console.log(movie)
      return <Movie title={movie.title}
                    poster={movie.medium_cover_image} 
                    key={movie.id} 
                    genres={movie.genres}
                    synopsis={movie.synopsis} />
    })
  return movies}
  }

   _getMovies = async () =>{
    const movies = await this._callApi()
    this.setState({
      movies 
    })

    console.log('set state')
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then( potato => potato.json())
    .then( json =>  json.data.movies)
    .catch( err => console.log(err))
  }

  render() {
    return (
      <div className="App">
      {this.state.movies ? this._renderMovies() : 'Loading...'} 
      {console.log(this.state.movies)}
      
      </div> 
    );
  }
}

export default App;
