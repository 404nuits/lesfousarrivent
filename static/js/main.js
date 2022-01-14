import { SceneManager } from './SceneManager.js';
import { Ecran } from './ecran.js';

const canvas = document.getElementById("canvas");

const sceneManager = new SceneManager(canvas);

const ecran = new Ecran();

bindEventListeners();
render();

function bindEventListeners() {
	window.onresize = resizeCanvas;
	resizeCanvas();	
}

function resizeCanvas() {
	canvas.style.width = '100%';
	canvas.style.height= '100%';
	
	canvas.width  = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;
    
    sceneManager.onWindowResize();
}

function render() {
    requestAnimationFrame(render);
    sceneManager.update();
}