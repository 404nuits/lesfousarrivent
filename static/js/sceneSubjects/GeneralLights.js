import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js';

export class GeneralLights {
	constructor(scene) {

		const ambientLight = new THREE.AmbientLight(0xffffff,0.1);

		scene.add(ambientLight);

		this.update = function (time) {

		};
	}
}