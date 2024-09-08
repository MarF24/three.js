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
import characterController from "./controllers/CharacterController.js";
import keyController from "./controllers/KeyController.js";
import moveController from "./controllers/MoveController.js";


scene.add( plane );
scene.add( cube );
scene.add( light );

camera.position.z = 5;
camera.position.set(2,5, -2)

characterController.addCharacter(cube)
characterController.addController(keyController)
characterController.addController(moveController)

loopMachine.addCallBack(() => {
    
    if(keyListener.isPressed(keyCode.ENTER)){
        cube.rotation.y += .01
    }

    camera.lookAt(cube.position)
    renderer.render(scene, camera);
})



resize.start(renderer);
loopMachine.start()
keyListener.start()
characterController.start()





// setInterval(() => {
//     cube.rotation.y += .01
//     renderer.render(scene, camera);
// }, 1000/60);