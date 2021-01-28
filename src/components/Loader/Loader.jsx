import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import React, { Component } from 'react';

export default class App extends Component {
  //other logic
  render() {
    return <Loader type="ThreeDots" color="#00BFFF" height={400} width={200} />;
  }
}
