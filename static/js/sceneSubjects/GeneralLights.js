import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js';

export class GeneralLights {
	constructor(scene) {

		let hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);

		let spotLight = new THREE.SpotLight(0xffffff);
		spotLight.position.set(0,40,-40);
		spotLight.rotation.y = 3,14159;
		spotLight.castShadow = true;
		spotLight.shadow.mapSize.width = 1024;
		spotLight.shadow.mapSize.height = 1024;
		spotLight.shadow.camera.near = 500;
		spotLight.shadow.camera.far = 4000;
		spotLight.shadow.camera.fov = 30;

		let helper = new THREE.SpotLightHelper(spotLight);


		scene.add(hemisphereLight,spotLight,helper);

		this.update = function (time) {

		};
	}
}