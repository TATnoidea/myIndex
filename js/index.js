let body = document.querySelector('body');
let canvas = document.createElement('canvas');
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.position = 'fixed';
body.append(canvas);