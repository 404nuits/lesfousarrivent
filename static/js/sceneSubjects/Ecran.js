import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js';

export class Ecran {
	constructor(scene) {

        let ecran = document.getElementById('ecran');
        let texture = new THREE.Texture(ecran);
        texture.magFilter = THREE.NearestFilter;
        let material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide,
            wireframex: true
        });
        let mesh = new THREE.Mesh(
            new THREE.PlaneGeometry(600/32.25, 300/32.25),
            material
        );

        mesh.position.set(0,0,10);


        scene.add(mesh);

		this.update = function (time) {
            texture.needsUpdate = true;
		};
	}
}