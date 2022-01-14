import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js';

export class Computer {
	constructor(scene) {		

		this.update = function (time) {
			this.mesh.rotation.y += 0.005;
		};
	}
}