import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone';
import Canvas from './Canvas.jsx';
 
// App component - represents the whole app
export default class App extends Component {
  constructor(props) {
  super(props)
    this.state = {
      title: '',
      image: null,
    }
  }

  onDrop(files) {
    this.setState({image: files[0]});
  }

  handleSubmit(event) {
    event.preventDefault();
  
    const title = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    this.setState({title: title})
  
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }


  render() {
    return (
      <div className="container" style={{textAlign: 'center', width: '100%', }}>
        <Dropzone onDrop={this.onDrop.bind(this)} >
          <div>drop me bitch</div>
        </Dropzone>
        
        <form className="update-title" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="fuck u"
            />
        </form>

        <Canvas image={this.state.image} title={this.state.title}></Canvas>
        <div style={{display: 'none'}}>
          <img id="background-image" src="./blondblank.png"/>
        </div>
      </div>
    );
  }
}