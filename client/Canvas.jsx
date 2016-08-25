import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

// Task component - represents a single todo item
export default class Canvas extends Component {
  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    const canvas = document.getElementById('background');
    const ctx = canvas.getContext('2d');
    const img = document.getElementById('background-image');
    const self = this;
    img.onload = function() {
      ctx.drawImage(img, 0, 0);
    };
    ctx.font = "italic bolder 50px Futura"
    const textWidth = ctx.measureText(self.props.title);
    const xcoord = (canvas.width / 2) - (textWidth.width / 2);
    ctx.fillText(self.props.title, xcoord, 70);

    if(this.props.image) {
      console.log(this.props.image);
      centerImg = new Image();
      centerImg.onload = function() {
        centerImg.maxWidth = 300;
        centerImg.maxHeight = 400;
        ctx.drawImage(centerImg, 100, 200)
      }
      centerImg.src = this.props.image.preview;
    }
  }

  render() {
    return (
      <canvas id="background" width="500" height="500">
Your browser does not support the HTML5 canvas tag.</canvas>
    );
  }
}