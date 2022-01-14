import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js';

import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js';

export class Computer {
	constructor(scene) {	

		this.loader = new GLTFLoader();

		this.loader.load(

			'assets/scene.glb',

			function ( gltf ) {

				scene.add(gltf.scene);

				gltf.scene.scale.setScalar(20);

				gltf.scene.rotation.y = 3.14159;

				gltf.scene.position.set(0,20,0);


			},
			function ( xhr ) {

				console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
		
			},
			function ( error ) {

				console.log( 'An error happened' );
		
			}

		)


		this.update = function (time) {
		};
	}
}