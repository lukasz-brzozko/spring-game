import { Engine, Render, World } from 'matter-js';

const resetCanvas = (currentEngine: Engine, currentRender: Render, currentWorld: World): void => {
  const engine = currentEngine;
  const render = currentRender;
  const world = currentWorld;

  World.clear(world, false);
  Engine.clear(engine);
  Render.stop(render);
  if (render.canvas) {
    render.canvas.remove();
    render.canvas = null;
    render.context = null;
    render.textures = {};
  }
};

export default resetCanvas;