import { field } from './field'


let speed = 20;
let q = speed;

const world = new WHS.World({
  stats: "fps", // fps, ms, mb or false if not need.
  autoresize: { delay: 1 },
  // camera: { position: [-speed, 5, 0] },
  rendering: {
    background: { color: 0x162129 },
    renderer: { antialias: true }
  },
  container: document.body
});

field.forEach(plane => plane.addTo(world))

new WHS.AmbientLight({
  light: {
    intensity: .9
  }
}).addTo(world);


export default world
export { q, speed }
