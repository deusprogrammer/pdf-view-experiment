import React, { Component } from 'react';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import PDFJsViewer from './components/PDFJsViewer'
import PDFEmbedViewer from './components/PDFEmbedViewer'
import PDFObjectViewer from './components/PDFObjectViewer'
import PDFIFrameViewer from './components/PDFIFrameViewer'

import FileLoader from './components/FileLoader'

class App extends Component {
  state = {
    bytestream: "",
    selected: "embed"
  }

  onFileLoad = (dataUri) => {
    console.log(dataUri)
    this.setState({bytestream: dataUri})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>PDF Viewing Test</h1>
            <ul className="header-menu">
              <li><Link onClick={() => {this.setState({selected: "embed"})}} className={this.state.selected === "embed" ? "selected" : null} to="/pdf-embed">Embed</Link></li>|
              <li><Link onClick={() => {this.setState({selected: "object"})}} className={this.state.selected === "object" ? "selected" : null} to="/pdf-object">Object</Link></li>|
              <li><Link onClick={() => {this.setState({selected: "iframe"})}} className={this.state.selected === "iframe" ? "selected" : null} to="/pdf-iframe">IFrame</Link></li>|
              <li><Link onClick={() => {this.setState({selected: "js"})}} className={this.state.selected === "js" ? "selected" : null} to="/pdf-js">JS</Link></li>
            </ul>
          </header>
          <FileLoader onFileLoad={(dataUri) => {this.onFileLoad(dataUri)}} />
          <Switch>
            <Route path="/" exact={true} component={() => {return <PDFEmbedViewer bytestream={this.state.bytestream} />}} />
            <Route path="/pdf-js" exact={true} component={() => {return <PDFJsViewer bytestream={this.state.bytestream} />}} />
            <Route path="/pdf-embed" exact={true} component={() => {return <PDFEmbedViewer bytestream={this.state.bytestream} />}} />
            <Route path="/pdf-object" exact={true} component={() => {return <PDFObjectViewer bytestream={this.state.bytestream} />}} />
            <Route path="/pdf-iframe" exact={true} component={() => {return <PDFIFrameViewer bytestream={this.state.bytestream} />}} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
