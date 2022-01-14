import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

import { RenderPass } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/postprocessing/RenderPass.js';
import { EffectComposer } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/postprocessing/EffectComposer.js';
import { UnrealBloomPass } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/postprocessing/UnrealBloomPass.js';

import { ShaderPass } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/shaders/FXAAShader.js';

import { GeneralLights } from './sceneSubjects/GeneralLights.js';
import { Computer } from './sceneSubjects/Computer.js';

export class SceneManager {
    constructor(canvas) {

        const clock = new THREE.Clock();

        const canvasSize = {
            width: canvas.width,
            height: canvas.height
        };

        const scene = buildScene();
        const renderer = buildRender(canvasSize);
        const camera = buildCamera(canvasSize);
        const controls = buildOrbitControls(camera, renderer);

        const sceneSubjects = createSceneSubjects(scene);

        init();

        function init() {

            camera.position.set( 0, 20, 50 );
            controls.update();


        }

        function buildScene() {
            const scene = new THREE.Scene();
            scene.background = new THREE.Color("#000");

            return scene;
        }

        function buildRender({ width, height }) {
            const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: false });
            const DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
            renderer.setPixelRatio(DPR);
            renderer.setSize(width, height);
            renderer.setClearColor(0x000000,0.0);

            return renderer;
        }

        function buildCamera({ width, height }) {
            const aspectRatio = width / height;
            const fieldOfView = 60;
            const nearPlane = 0.1;
            const farPlane = 1000;
            const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

            return camera;
        }

        function createSceneSubjects(scene) {

            const sceneSubjects = [
                new GeneralLights(scene),
                new Computer(scene),
            ];

            return sceneSubjects;
        }

        function buildOrbitControls(camera, renderer) {
            let controls = new OrbitControls(camera, renderer.domElement);

            controls.minDistance = 30;
            controls.maxDistance = 200;
            controls.enablePan = true;
            controls.enableDamping = true;
            controls.dampingFactor = 0.1;
            controls.rotateSpeed = 0.5;

            return controls;
        }

        this.update = function () {
            const elapsedTime = clock.getElapsedTime();

            for (let i = 0; i < sceneSubjects.length; i++) {
                sceneSubjects[i].update(elapsedTime);
            }

            controls.update();


            renderer.render(scene, camera);

        };

        this.onWindowResize = function () {
            const { width, height } = canvas;

            canvasSize.width = width;
            canvasSize.height = height;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);


        };

        function showHelpers() {
            const gridHelper = new THREE.GridHelper(200,50);
            scene.add(gridHelper);
        }
    }
}