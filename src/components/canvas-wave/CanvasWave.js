import React, { useEffect, useRef } from 'react';
import * as dat from 'dat.gui';

const CanvasWave = ({freq}) => {
  const canvasRef = useRef();

  useEffect(() => {
    console.log(`HERE IS FREQ: ${freq}`);
    const canvas = canvasRef.current;
    const gui = new dat.GUI();

    canvas.width = 300;
    canvas.height = 100;

    const context = canvas.getContext('2d');

    const wave = new Wave(context, 15, 20, freq, gui); // Adjust parameters
    wave.animate();

    return () => {
      gui.destroy();
    };
  }, []);

  useEffect(() => {
    console.log(`HERE IS FREQ: ${freq}`);
    const canvas = canvasRef.current;
    const gui = new dat.GUI();

    canvas.width = 300;
    canvas.height = 100;

    const context = canvas.getContext('2d');

    const wave = new Wave(context, 15, 20, freq, gui); // Adjust parameters
    wave.animate();

    return () => {
      gui.destroy();
    };
  }, [freq]);

  return (
    <div style={{ width: '300px', height: '100px', overflow: 'hidden' }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

class Wave {
  constructor(context, maxAmplitude, length, frequency, bgOpacity = 0.03, y) {
    this.ctx = context;
    this.maxAmplitude = maxAmplitude;
    this.amplitude = 0;
    this.length = length;
    this.frequency = frequency;
    this.increment = Math.random() * 360;
    this.bgOpacity = bgOpacity;
    this.y = y || this.ctx.canvas.height / 2;

    this.frameCallback = () => {
      this.draw(this.ctx);
      requestAnimationFrame(this.frameCallback);
    };
  }

  draw(c) {
    c.clearRect(0, 0, c.canvas.width, c.canvas.height);

    c.beginPath();

    // Set the stroke style to purple color (hue: 270)
    c.strokeStyle = `hsla(270, 80%, 70%, ${this.bgOpacity})`;

    c.moveTo(0, c.canvas.height / 2);

    for (let i = 0; i < c.canvas.width; i += 1) {
      c.lineTo(i, this.y + Math.sin(i / this.length + this.increment) * this.amplitude);
    }

    c.stroke();
    c.closePath();

    this.amplitude = Math.sin(this.increment) * this.maxAmplitude;
    this.increment -= this.frequency / 1000;
  }

  animate() {
    this.frameCallback();
  }
}

export default CanvasWave;
