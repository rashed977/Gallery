
import { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './search-bar';
import './App.css';
import ImageList from './imageList';

class App extends Component {

  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  }
  render(){

    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit = {this.onSearchSubmit} />
        <ImageList images = {this.state.images}/>
      </div>
    );
  }
}

export default App;
