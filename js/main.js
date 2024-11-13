// Wrap each letter in a span with the class "letter" for the animate-text only
document.querySelectorAll('.animate-text').forEach((element) => {
  element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
});

// Animate the text without interfering with the color
anime.timeline({ loop: false })
  .add({
    targets: '.animate-text .letter',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i
  })
  .add({
    targets: '.animate-text',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// Event listener for the navbar toggler
document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.querySelector('.navbar-toggler');
  toggler.addEventListener('click', function () {
    toggler.classList.toggle('collapsed');
  });
});

// 3D

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Setup the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x222230);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a new scene
const scene = new THREE.Scene();

// Setup scene lighting
const whiteLight = new THREE.DirectionalLight(0xffffff);
whiteLight.position.set(0, 0, 1);
scene.add(whiteLight);
scene.add(new THREE.AmbientLight(0xffffff, 0.1));

// Setup camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = 10;
controls.update();

// Render loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

// Setup scene objects
const geometry = new THREE.BoxGeometry(2, 6, 2);

function createWall(width, height) {
  for (let x = -width / 2; x <= width / 2; x++) {
    for (let y = -width / 2; y <= height / 2; y++) {
      const material = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(1.05 * x, 1.05 * y, 0);
      cube.userData = { x, y };
      scene.add(cube);
    }
  }
}

// Object picking
const raycaster = new THREE.Raycaster();
document.addEventListener('mousedown', onMouseDown);

/**
 * Handler for the 'mousedown' event
 * @param {MouseEvent} ev 
 */
function onMouseDown(ev) {
    // Compute normalized this.mouse coordinates
    const coords = {
      x: (ev.clientX / renderer.domElement.clientWidth) * 2 - 1,
      y: -(ev.clientY / renderer.domElement.clientHeight) * 2 + 1
    };

    raycaster.setFromCamera(coords, camera);

    let intersections = raycaster.intersectObjects(scene.children, true);
    if (intersections.length > 0) {
      const selectedObject = intersections[0].object;
      const { x, y } = selectedObject.userData;
      const color = colors[activeColor];
      selectedObject.material.color = new THREE.Color(color);
      console.log(`setting color of cube at (x: ${x}, y: ${y}) to ${activeColor}`)
    } else {
      return null;
    }
}
createWall(0, 0);
animate();