import camera from "./basic/Camera.js"
import renderer from "./basic/Renderer.js"
import scene from "./basic/Scene.js"
import cube from "./basic/shapes/Cube.js";
import light from "./basic/Ligth.js";
import resize from "./basic/Resize.js";
import plane from "./basic/shapes/Plane.js";
import loopMachine from "./basic/LoopMachine.js";
import keyListener from "./basic/KeyListener.js";
import keyCode from "./basic/KeyCode.js"


scene.add( plane );
scene.add( cube );
scene.add( light );

camera.position.z = 5;
camera.position.set(2,2,2)
camera.lookAt(cube.position)

loopMachine.addCallBack(() => {
    
    if(keyListener.isPressed(keyCode.ENTER)){
        cube.rotation.y += .01
    }
    
    renderer.render(scene, camera);
})

// setInterval(() => {
//     cube.rotation.y += .01
//     renderer.render(scene, camera);
// }, 1000/60);

resize.start(renderer);
loopMachine.start()
keyListener.start()
