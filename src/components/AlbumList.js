import React, {Component} from 'react';
import {View,Text} from 'react-native';
import axios from 'axios';
import Header from './Header';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{
  state = {
    albums: []
  };
  componentWillMount(){
    axios.get("https://rallycoding.herokuapp.com/api/music_albums").then((response) => {
      // this.setState(albums: response.data)
      this.setState({albums: response.data});
    }).catch(()=>{
      console.log("Error");
    });
  }
  renderAlbums(){
    return this.state.albums.map((album)=>{
      return <AlbumDetail key={album.title} title={album.title}/>
    });
  }
  render(){
    return(
      <View>
        {this.renderAlbums()}
      </View>
    )
  }

}


export default AlbumList;
